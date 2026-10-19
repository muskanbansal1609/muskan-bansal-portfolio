import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ScrollProvider } from '@/lib/scroll';

const interTight = localFont({
  src: '../fonts/InterTight-VariableFont_wght.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

const instrumentSerif = localFont({
  src: [
    {
      path: '../fonts/InstrumentSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/InstrumentSerif-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: '../fonts/JetBrainsMono-VariableFont_wght.woff2',
  variable: '--font-mono',
  display: 'swap',
  weight: '100 800',
});

export const viewport: Viewport = {
  themeColor: '#f4f2ee',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://muskan-bansal-portfolio.netlify.app'),
  title: 'Muskan Bansal — Frontend Engineer',
  description:
    'Frontend Engineer specializing in performance-critical, accessible web apps for fintech platforms. Portfolio of selected works, component architecture, and engineering experience.',
  openGraph: {
    title: 'Muskan Bansal — Frontend Engineer',
    description:
      'Frontend Engineer specializing in performance-critical, accessible web apps for fintech platforms.',
    url: 'https://muskan-bansal-portfolio.netlify.app',
    siteName: 'Muskan Bansal Portfolio',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Muskan Bansal — Frontend Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/portrait-bust.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen selection:bg-[#0d0d0d] selection:text-[#f4f2ee]"
        suppressHydrationWarning
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
