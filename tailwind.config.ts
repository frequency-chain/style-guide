import tailwindColors from './src/lib/styles/tailwindColors';
import { MAX_PAGE_WIDTH } from './src/lib/consts';

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.svelte',
    './public/index.html',
    './src/**/*.{js,ts,svelte}',
    './src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Newake', 'Arial Black', 'Arial Bold', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: tailwindColors,
      fontSize: {
        default: '16px',
        h0: '70px',
        h1: '56px',
        h2: '48px',
        h3: '40px',
        h4: '32px',
        h5: '24px',
        h6: '20px',
        lg: '24px',
        md: '18px',
        normal: '16px',
        sm: '12px',
        xs: '10px',
      },
      lineHeight: {
        default: '22px',
        h0: '70px',
        h1: '61px',
        h2: '52px',
        h3: '44px',
        h4: '35px',
        h5: '26px',
        h6: '22px',
        lg: '30px',
        md: '25px',
        normal: '22px',
        sm: '16px',
        xs: '14px',
      },
      spacing: {
        f4: '4px',
        f8: '8px',
        f12: '12px',
        f16: '16px',
        f20: '20px',
        f24: '24px',
        f32: '32px',
        f40: '40px',
        f48: '48px',
        f64: '64px',
        f80: '80px',
        f96: '96px',
        f120: '120px',
        f128: '128px',
        f160: '160px',
        f192: '192px',
        f224: '224px',
        f256: '256px',
        f320: '320px',
      },
      boxShadow: {
        md: '0px 4px 7px #00000040',
        lg: '0px 4px 10px 0px #00000040',
      },
    },
    screens: {
      xs: '0',
      sm: '320px',
      md: '744px',
      lg: '1300px',
      xl: `${MAX_PAGE_WIDTH}px`,
      'vertical-lg': { raw: '(max-height: 700px) and (min-width: 1300px)' },
      'vertical-md': { raw: '(max-height: 700px) and (min-width: 900px)' },
      vertical: { raw: '(max-height: 700px) or (min-width: 0px)' },
      horizontal: { raw: '(min-height: 700px) and (min-width: 1300px)' },
    },
  },
  plugins: [],
};
