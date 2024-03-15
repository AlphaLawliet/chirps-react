import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            backgroundImage:{
                'bg1' :" url('../../assets/bg1.jpg')",
                'bg2' : "url('../../assets/bg2.jpg')",
                'bg3' :" url('../../assets/bg3.jpg')"
            }
        },
    },

    plugins: [forms],
};
