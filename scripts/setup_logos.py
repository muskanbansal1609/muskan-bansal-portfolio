import os

os.makedirs('public/logos', exist_ok=True)

# MIT License for Devicon
with open('public/logos/LICENSE-DEVICON.txt', 'w') as f:
    f.write("""MIT License

Copyright (c) 2015-2024 Devicon contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
""")

# CC0 License for Simple Icons
with open('public/logos/LICENSE-SIMPLE-ICONS.txt', 'w') as f:
    f.write("""CC0 1.0 Universal (CC0 1.0) Public Domain Dedication

The person who associated a work with this deed has dedicated the work to the
public domain by waiving all of his or her rights to the work worldwide under
copyright law, including all related and neighboring rights, to the extent
allowed by law.
""")

# SVG definitions for real brand logos and concept icons
LOGOS = {
    "javascript": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
  <path fill="#000000" d="M67.312 103.605c2.316 3.965 5.795 6.78 10.982 6.78 4.708 0 7.734-2.385 7.734-5.69 0-3.931-3.158-5.369-8.472-7.684l-2.91-1.258c-8.403-3.623-13.98-8.21-13.98-17.749 0-8.878 6.78-15.626 17.305-15.626 7.562 0 13.02 2.741 16.927 9.664l-7.734 4.982c-1.884-3.262-4.068-4.606-8.981-4.606-4.137 0-6.643 2.522-6.643 5.301 0 3.657 2.651 5.094 7.632 7.238l2.91 1.258c10.143 4.372 15.19 8.947 15.19 18.295 0 10.452-8.278 16.48-18.795 16.48-10.742 0-17.203-5.267-20.156-11.859l8.991-5.186zm-36.883 1.13c1.782 2.879 3.829 5.301 7.699 5.301 3.931 0 6.438-1.576 6.438-7.734V63.137h11.206v39.378c0 11.961-6.985 17.305-16.824 17.305-8.472 0-13.568-4.304-16.447-9.596l7.928-5.489z"/>
</svg>''',

    "typescript": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#3178C6" d="M0 0h128v128H0z"/>
  <path fill="#FFFFFF" d="M65.044 105.158c3.275 4.542 8.528 7.377 15.265 7.377 10.468 0 16.945-5.59 16.945-13.888 0-8.825-5.738-12.774-15.486-16.944l-3.499-1.488c-7.078-3.048-10.394-5.883-10.394-10.99 0-4.99 4.1-8.528 10.617-8.528 5.666 0 9.828 2.085 13.024 6.331l6.702-6.553c-5.214-6.177-12.138-8.974-19.873-8.974-12.034 0-19.803 7.525-19.803 17.687 0 9.273 5.738 13.738 15.486 17.91l3.5 1.489c7.228 3.12 10.693 6.176 10.693 11.513 0 5.808-4.915 9.124-11.765 9.124-7.452 0-12.138-3.575-15.635-8.71l-5.777 5.644zM18.847 60.106h18.39v51.894H48.4V60.106h18.39V51H18.847v9.106z"/>
</svg>''',

    "react": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
  <g stroke="#61DAFB" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>''',

    "nextjs": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="100%" height="100%">
  <mask height="180" id=":r0:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style="mask-type:alpha">
    <circle cx="90" cy="90" fill="black" r="90"></circle>
  </mask>
  <g mask="url(#:r0:mask0_408_134)">
    <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r0:paint0_linear_408_134)"></path>
    <rect fill="url(#:r0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
  </g>
  <defs>
    <linearGradient id=":r0:paint0_linear_408_134" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
      <stop stop-color="white"></stop>
      <stop offset="1" stop-color="white" stop-opacity="0"></stop>
    </linearGradient>
    <linearGradient id=":r0:paint1_linear_408_134" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
      <stop stop-color="white"></stop>
      <stop offset="1" stop-color="white" stop-opacity="0"></stop>
    </linearGradient>
  </defs>
</svg>''',

    "redux": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path fill="#764ABC" d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.3-5.6-5.1-3 .1-5.3 2.6-5.1 5.6.1 2.9 2.6 5.2 5.7 5.3zm-31.2 0c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.3-5.6-5.1-3 .1-5.3 2.6-5.1 5.6.1 2.9 2.6 5.2 5.7 5.3zm15.6-26.8c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.3-5.6-5.1-3 .1-5.3 2.6-5.1 5.6.1 2.9 2.6 5.2 5.7 5.3zM50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm25.5 59.8c-2.7 4.7-7.3 7.8-12.7 8.6-4.9.7-9.8-.8-13.6-4.2-3.8 3.4-8.7 4.9-13.6 4.2-5.4-.8-10-3.9-12.7-8.6-3.8-6.6-3-14.7 1.9-20.5-2.2-4.9-2.3-10.6-.2-15.6 2.7-6.5 8.9-10.7 15.9-10.7 4 0 7.9 1.4 11 3.9 3.1-2.5 7-3.9 11-3.9 7 0 13.2 4.2 15.9 10.7 2.1 5 2 10.7-.2 15.6 4.9 5.9 5.7 14 1.9 20.6z"/>
</svg>''',

    "tanstackquery": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path fill="#FF4154" d="M128 0C57.308 0 0 57.308 0 128c0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128C256 57.308 198.692 0 128 0zm0 216c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88z"/>
  <circle cx="128" cy="128" r="54" fill="#FFD438"/>
  <circle cx="128" cy="128" r="28" fill="#FF4154"/>
</svg>''',

    "tailwindcss": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
</svg>''',

    "radixui": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
  <path d="M12 25C18.6274 25 24 19.6274 24 13C24 6.37258 18.6274 1 12 1C5.37258 1 0 6.37258 0 13C0 19.6274 5.37258 25 12 25Z" fill="#161618"/>
  <path d="M7 6H12C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16H7V6Z" fill="#FFFFFF"/>
  <path d="M7 16H12V21H7V16Z" fill="#FFFFFF"/>
  <path d="M12 16C14.7614 16 17 13.7614 17 11H12V16Z" fill="#161618"/>
</svg>''',

    "storybook": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 318">
  <path fill="#FF4785" d="M211.3 274.6c-4.1 6.5-11.4 10.4-19.1 10.4H53.1c-14.7 0-26.6-11.9-26.6-26.6V39.6C26.5 24.9 38.4 13 53.1 13h139.1c7.7 0 15 3.9 19.1 10.4l40.1 63.6c2.9 4.6 4.6 10 4.6 15.5v108.5c0 5.5-1.7 10.9-4.6 15.5l-40.1 48.1z"/>
  <path fill="#FFFFFF" d="M165.7 128.8h-23.4v-18.7h23.4c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3H119c-4.6 0-8.3 3.7-8.3 8.3v50.2c0 4.6 3.7 8.3 8.3 8.3h46.7c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3v-14.9z"/>
</svg>''',

    "vite": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 257">
  <defs>
    <linearGradient id="vite-a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
      <stop offset="0%" stop-color="#41D1FF"/>
      <stop offset="100%" stop-color="#BD34FE"/>
    </linearGradient>
    <linearGradient id="vite-b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
      <stop offset="0%" stop-color="#FFEA83"/>
      <stop offset="8.333%" stop-color="#FFDD35"/>
      <stop offset="100%" stop-color="#FFA800"/>
    </linearGradient>
  </defs>
  <path fill="url(#vite-a)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"/>
  <path fill="url(#vite-b)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.044c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.67-3.859-4.033l11.979-49.27c.593-2.438-1.528-4.636-3.99-4.148z"/>
</svg>''',

    "webpack": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#8DD6F9" d="M64 4.5L13.7 33.6v58.8L64 121.5l50.3-29.1V33.6L64 4.5zm0 10.9l39.5 22.8-15.8 9.1-23.7-13.7V15.4zM24.5 40.5L64 63.3l-15.8 9.1L8.7 49.6l15.8-9.1zm-8.8 19.3l39.5 22.8v18.2l-39.5-22.8V59.8zm48.3 49.3V90.9l39.5-22.8v18.2L64 109.1zm39.5-49.3L64 37l15.8-9.1 39.5 22.8-15.8 9.1z"/>
</svg>''',

    "jest": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#C21325" d="M64.086 4.5c-32.88 0-59.54 26.66-59.54 59.54 0 25.13 15.6 46.61 37.6 55.19 3.01.55 4.11-1.31 4.11-2.9 0-1.43-.05-5.21-.08-10.23-15.29 3.32-18.52-7.37-18.52-7.37-2.5-6.35-6.1-8.04-6.1-8.04-4.99-3.41.38-3.34.38-3.34 5.52.39 8.42 5.67 8.42 5.67 4.9 8.4 12.86 5.97 16 4.57.5-3.55 1.92-5.97 3.49-7.35-12.21-1.39-25.05-6.1-25.05-27.17 0-6 2.14-10.91 5.66-14.75-.57-1.39-2.45-6.98.54-14.55 0 0 4.61-1.48 15.11 5.63 4.38-1.22 9.08-1.83 13.75-1.85 4.67.02 9.37.63 13.75 1.85 10.49-7.11 15.09-5.63 15.09-5.63 3 7.57 1.12 13.16.55 14.55 3.52 3.84 5.65 8.75 5.65 14.75 0 21.13-12.86 25.76-25.11 27.12 1.97 1.7 3.73 5.06 3.73 10.19 0 7.36-.07 13.29-.07 15.1 0 1.61 1.08 3.49 4.14 2.89 21.98-8.6 37.55-30.07 37.55-55.18 0-32.88-26.66-59.54-59.54-59.54z"/>
</svg>''',

    "python": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <linearGradient id="py-a" x1="12.959%" x2="79.639%" y1="12.114%" y2="78.794%">
      <stop offset="0%" stop-color="#387EB8"/>
      <stop offset="100%" stop-color="#366994"/>
    </linearGradient>
    <linearGradient id="py-b" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
      <stop offset="0%" stop-color="#FFE052"/>
      <stop offset="100%" stop-color="#FFC331"/>
    </linearGradient>
  </defs>
  <path fill="url(#py-a)" d="M63.585 3c-29.444 0-27.652 12.77-27.652 12.77l.032 13.226h28.188v3.992H24.364S3 30.644 3 60.377c0 29.734 18.618 28.61 18.618 28.61h11.109v-15.6c0-17.89 15.02-17.382 15.02-17.382h28.986s14.072.24 14.072-13.848V16.804S93.067 3 63.585 3zM49.27 11.53c3.08 0 5.58 2.5 5.58 5.58s-2.5 5.58-5.58 5.58-5.58-2.5-5.58-5.58 2.5-5.58 5.58-5.58z"/>
  <path fill="url(#py-b)" d="M64.415 125c29.444 0 27.652-12.77 27.652-12.77l-.032-13.226H63.847v-3.992h39.789s21.364 2.344 21.364-27.389c0-29.734-18.618-28.61-18.618-28.61H95.273v15.6c0 17.89-15.02 17.382-15.02 17.382H51.267s-14.072-.24-14.072 13.848v35.348S34.933 125 64.415 125zm14.315-8.53c-3.08 0-5.58-2.5-5.58-5.58s2.5-5.58 5.58-5.58 5.58 2.5 5.58 5.58-2.5 5.58-5.58 5.58z"/>
</svg>''',

    "sass": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path fill="#CF649A" d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm43.3 56.4c-1.3 12.8-13.5 16.5-22.1 12.8-4.1-1.8-6.1-4.7-9.5-4.7-2.6 0-4.6 2-4.4 4.8.4 4.5 6.6 4.8 10 6.6 5.3 2.9 8.2 6.5 7.4 12.7-1.1 8.8-10.8 12.9-19.7 11.2-11.4-2.2-15.8-12.1-12.9-20.9 2.5-7.5 9.7-10.2 16.5-12 5.5-1.4 11.2-2.3 12.2-7.5.9-4.8-2.8-8-7.5-8.1-6.8-.1-11.4 3.9-14.4 9.1-1.8 3.2-4.7 4.2-7.7 2.5-3.3-1.8-3.4-5.3-1.5-8.6C60.4 46.5 68.9 41 80.3 41.5c12.2.6 18.1 7.8 17 18.9z"/>
</svg>''',

    "html5": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/>
  <path fill="#EF652A" d="M256 472l149-41 35-394H256z"/>
  <path fill="#EBEBEB" d="M256 208h-74l-5-58h79V94H114l16 172h126zm0 152l-64-17-4-49h-56l7 89 117 32z"/>
  <path fill="#FFFFFF" d="M256 208h74l-7 78-67 18v58l117-32 16-176H256zm0-114v56h142l5-56z"/>
</svg>''',

    "css3": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/>
  <path fill="#33A9DC" d="M256 472l149-41 35-394H256z"/>
  <path fill="#EBEBEB" d="M256 208h-74l-5-58h79V94H114l16 172h126zm0 152l-64-17-4-49h-56l7 89 117 32z"/>
  <path fill="#FFFFFF" d="M256 208h74l-7 78-67 18v58l117-32 16-176H256zm0-114v56h142l5-56z"/>
</svg>''',

    "graphql": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <path fill="#E10098" d="M57.4 300.9a16.5 16.5 0 0 1-8.3-28.5L183.3 83.1a16.5 16.5 0 0 1 23.4 0l134.2 189.3a16.5 16.5 0 0 1-8.3 28.5H57.4zm137.6-177L88.2 273.7h223.6L205 123.9h-10z"/>
  <circle cx="57" cy="290" r="26" fill="#E10098"/>
  <circle cx="343" cy="290" r="26" fill="#E10098"/>
  <circle cx="200" cy="74" r="26" fill="#E10098"/>
</svg>''',

    "testinglibrary": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path fill="#E33332" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm68.3 189.5L128 228.3l-68.3-38.8V86.5L128 47.7l68.3 38.8v103z"/>
  <circle cx="128" cy="128" r="38" fill="#FFFFFF"/>
</svg>''',

    # Concept icons (thin line style)
    "restapi": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="10" width="52" height="18" rx="4"/>
  <rect x="6" y="36" width="52" height="18" rx="4"/>
  <line x1="16" y1="19" x2="22" y2="19"/>
  <line x1="16" y1="45" x2="22" y2="45"/>
  <path d="M44 28v8"/>
  <path d="M40 32l4 4 4-4"/>
</svg>''',

    "lighthouse": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M24 16l8-10 8 10"/>
  <path d="M22 16h20l-4 42H26l-4-42z"/>
  <path d="M18 58h28"/>
  <path d="M20 30h24"/>
  <path d="M21 44h22"/>
  <line x1="32" y1="20" x2="32" y2="24"/>
  <path d="M46 16l10-4"/>
  <path d="M18 16l-10-4"/>
</svg>''',

    "websocket": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="16" cy="32" r="8"/>
  <circle cx="48" cy="32" r="8"/>
  <path d="M24 28c4-4 12-4 16 0"/>
  <path d="M40 36c-4 4-12 4-16 0"/>
  <polyline points="38 24 40 28 36 30"/>
  <polyline points="26 40 24 36 28 34"/>
</svg>''',

    "virtualization": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="8" width="48" height="48" rx="6"/>
  <line x1="8" y1="20" x2="56" y2="20"/>
  <rect x="14" y="26" width="36" height="12" rx="2" stroke-dasharray="3 3"/>
  <line x1="8" y1="44" x2="56" y2="44"/>
</svg>''',

    "responsive": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="10" width="42" height="30" rx="3"/>
  <rect x="36" y="24" width="22" height="30" rx="3"/>
  <line x1="27" y1="40" x2="27" y2="46"/>
  <line x1="20" y1="46" x2="34" y2="46"/>
  <circle cx="47" cy="48" r="1.5" fill="#0d0d0d"/>
</svg>''',

    "cssmodules": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 6l22 12v28L32 58 10 46V18L32 6z"/>
  <polyline points="10 18 32 30 54 18"/>
  <line x1="32" y1="30" x2="32" y2="58"/>
</svg>''',
}

for name, svg in LOGOS.items():
    with open(f'public/logos/{name}.svg', 'w') as f:
        f.write(svg.strip())

print(f"Generated {len(LOGOS)} logo SVGs in public/logos/")
