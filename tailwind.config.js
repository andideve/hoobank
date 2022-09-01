/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './node_modules/@andideve/tailwindui-react/**/*.js'],
  theme: {
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    extend: {
      colors: {
        accent: 'hsla(182, 100%, 50%, 1)',
        separator: 'hsla(249, 5%, 26%, 1)',
      },
    },
  },
  plugins: [],
};
