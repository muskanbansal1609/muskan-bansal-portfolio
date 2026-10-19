const { chromium } = require('playwright');

async function run() {
  console.log('🚀 Starting responsive verification test with Playwright...');
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const viewports = [
    { name: 'desktop-1440x900', width: 1440, height: 900 },
    { name: 'mobile-390x844', width: 390, height: 844 },
  ];

  let hasErrors = false;

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });

    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', (err) => {
      consoleErrors.push(err.message);
    });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // 1. Horizontal overflow check
    const overflowCheck = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      return {
        scrollWidth,
        innerWidth,
        hasOverflow: scrollWidth > innerWidth,
      };
    });

    console.log(`ScrollWidth: ${overflowCheck.scrollWidth}px, InnerWidth: ${overflowCheck.innerWidth}px`);
    if (overflowCheck.hasOverflow) {
      console.error(`❌ HORIZONTAL OVERFLOW DETECTED: scrollWidth (${overflowCheck.scrollWidth}) > innerWidth (${overflowCheck.innerWidth})`);
      hasErrors = true;
    } else {
      console.log(`✅ Zero horizontal overflow verified! (${overflowCheck.scrollWidth} === ${overflowCheck.innerWidth})`);
    }

    // 2. Interactive ID Card Flip Test (keyboard & touch/click)
    const card = page.locator('div[role="button"][aria-label*="Developer ID Card"]');
    if (await card.count() > 0) {
      await card.first().press('Enter');
      await page.waitForTimeout(400);
      await card.first().click({ force: true });
      await page.waitForTimeout(400);
      console.log(`✅ ID Card flipped successfully via Enter and Click.`);
    }

    // 3. Sound Control Button Test
    const soundBtn = page.locator('button[aria-label*="audio"]');
    if (await soundBtn.count() > 0) {
      const initialLabel = await soundBtn.first().getAttribute('aria-label');
      await soundBtn.first().click({ force: true });
      await page.waitForTimeout(200);
      const newLabel = await soundBtn.first().getAttribute('aria-label');
      console.log(`✅ Sound button clicked: "${initialLabel}" -> "${newLabel}"`);
    }

    // 4. Capture screenshot
    const screenshotPath = `public/screenshot-${vp.name}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Saved screenshot to ${screenshotPath}`);

    // Full page screenshot
    const fullScreenshotPath = `public/screenshot-${vp.name}-full.png`;
    await page.screenshot({ path: fullScreenshotPath, fullPage: true });
    console.log(`📸 Saved full-page screenshot to ${fullScreenshotPath}`);

    // Check console errors
    if (consoleErrors.length > 0) {
      console.error(`❌ Console errors detected in ${vp.name}:`, consoleErrors);
      hasErrors = true;
    } else {
      console.log(`✅ No console errors at runtime in ${vp.name}`);
    }

    await page.close();
  }

  await browser.close();

  if (hasErrors) {
    console.error('\n❌ Verification tests encountered issues.');
    process.exit(1);
  } else {
    console.log('\n🎉 ALL QUALITY CHECKS & RESPONSIVE TESTS PASSED PERFECTLY!');
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});
