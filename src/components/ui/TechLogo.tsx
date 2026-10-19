import React from 'react';

export interface BrandMeta {
  file: string;
  color: string;
  glow: string;
  isBrand: boolean;
}

export const BRAND_MAP: Record<string, BrandMeta> = {
  javascript: {
    file: '/logos/javascript.svg',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.22)',
    isBrand: true,
  },
  typescript: {
    file: '/logos/typescript.svg',
    color: '#3178C6',
    glow: 'rgba(49, 120, 198, 0.25)',
    isBrand: true,
  },
  react: {
    file: '/logos/react.svg',
    color: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.25)',
    isBrand: true,
  },
  nextjs: {
    file: '/logos/nextjs.svg',
    color: '#000000',
    glow: 'rgba(0, 0, 0, 0.15)',
    isBrand: true,
  },
  redux: {
    file: '/logos/redux.svg',
    color: '#764ABC',
    glow: 'rgba(118, 74, 188, 0.25)',
    isBrand: true,
  },
  tanstackquery: {
    file: '/logos/tanstackquery.svg',
    color: '#FF4154',
    glow: 'rgba(255, 65, 84, 0.25)',
    isBrand: true,
  },
  tailwindcss: {
    file: '/logos/tailwindcss.svg',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.25)',
    isBrand: true,
  },
  radixui: {
    file: '/logos/radixui.svg',
    color: '#161618',
    glow: 'rgba(22, 22, 24, 0.2)',
    isBrand: true,
  },
  storybook: {
    file: '/logos/storybook.svg',
    color: '#FF4785',
    glow: 'rgba(255, 71, 133, 0.25)',
    isBrand: true,
  },
  vite: {
    file: '/logos/vite.svg',
    color: '#BD34FE',
    glow: 'rgba(189, 52, 254, 0.25)',
    isBrand: true,
  },
  webpack: {
    file: '/logos/webpack.svg',
    color: '#8DD6F9',
    glow: 'rgba(141, 214, 249, 0.25)',
    isBrand: true,
  },
  jest: {
    file: '/logos/jest.svg',
    color: '#C21325',
    glow: 'rgba(194, 19, 37, 0.25)',
    isBrand: true,
  },
  python: {
    file: '/logos/python.svg',
    color: '#387EB8',
    glow: 'rgba(56, 126, 184, 0.25)',
    isBrand: true,
  },
  sass: {
    file: '/logos/sass.svg',
    color: '#CF649A',
    glow: 'rgba(207, 100, 154, 0.25)',
    isBrand: true,
  },
  html5: {
    file: '/logos/html5.svg',
    color: '#E34F26',
    glow: 'rgba(227, 79, 38, 0.25)',
    isBrand: true,
  },
  css3: {
    file: '/logos/css3.svg',
    color: '#1572B6',
    glow: 'rgba(21, 114, 182, 0.25)',
    isBrand: true,
  },
  graphql: {
    file: '/logos/graphql.svg',
    color: '#E10098',
    glow: 'rgba(225, 0, 152, 0.25)',
    isBrand: true,
  },
  testinglibrary: {
    file: '/logos/testinglibrary.svg',
    color: '#E33332',
    glow: 'rgba(227, 51, 50, 0.25)',
    isBrand: true,
  },
};

export const CONCEPT_MAP: Record<string, BrandMeta> = {
  restapi: {
    file: '/logos/restapi.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  },
  lighthouse: {
    file: '/logos/lighthouse.svg',
    color: '#F57A00',
    glow: 'rgba(245, 122, 0, 0.2)',
    isBrand: false,
  },
  websocket: {
    file: '/logos/websocket.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  },
  virtualization: {
    file: '/logos/virtualization.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  },
  responsive: {
    file: '/logos/responsive.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  },
  cssmodules: {
    file: '/logos/cssmodules.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  },
};

export function isBrand(key?: string): boolean {
  if (!key) return false;
  return key in BRAND_MAP;
}

export function getLogoMeta(key?: string): BrandMeta {
  if (key && key in BRAND_MAP) return BRAND_MAP[key];
  if (key && key in CONCEPT_MAP) return CONCEPT_MAP[key];
  return {
    file: '/logos/javascript.svg',
    color: '#0d0d0d',
    glow: 'rgba(13, 13, 13, 0.08)',
    isBrand: false,
  };
}

interface TechLogoProps {
  brandKey?: string;
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  brandKey,
  size = 40,
  className = '',
  showGlow = true,
}) => {
  const meta = getLogoMeta(brandKey);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {showGlow && meta.isBrand && (
        <span
          className="absolute inset-0 rounded-full blur-md opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{ background: meta.glow, transform: 'scale(1.3)' }}
        />
      )}
      <img
        src={meta.file}
        alt={brandKey || 'Tech logo'}
        width={size}
        height={size}
        className="relative z-10 w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};
