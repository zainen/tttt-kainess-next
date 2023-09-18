/** @type {import('tailwindcss').Config} */
import 'dotenv/config';
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'waves': "url('/waves.webp')",
        'bamboo': "url('/img/bamboo.jpeg')",
        'bamboo-zoomed-out': "url('/img/bamboo-zoomed-out.jpeg')",
      },
    },
    colors: {
      primary: {
        100: '#7FD1C7',
        200: '#61b3aa',
        300: '#147169',
        400: '#1d4446',
      },
      accent: {
        100: '#F2C94C',
        200: '#886b00',
      },
      text: {

      },
      tttt: {
        100: '#EAF4F4',
        200: '#e0eaea',
        300: '#b8c1c1',
      },
      gray: {
        700: '#334155'
      },
      red: {
        warn: '#C42847'
      }
    },
    fontFamily: {
      sans: ['Dosis', 'sans-serif']
    },
    extend: {

      dropShadow: {
        header: '0 1.2px 1.2px rgba(51,65,85,1)',
        'sub-header': '0 1.2px 1.2px rgba(51,65,85,0.8))'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],

}
