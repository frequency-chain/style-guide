import {tailwindColors} from './tailwindColors.ts';

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
                sans: ['Poppins'],
            },
            colors: tailwindColors,
            fontSize: {
                default: '16px',
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
                f128: '128px',
                f160: '160px',
                f192: '192px',
                f224: '224px',
                f256: '256px',
            }

        },
    },
    plugins: [],
};
