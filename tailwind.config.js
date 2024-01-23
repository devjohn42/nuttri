/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      oldLace: '#FAF1E4',
      hunterGreen: '#435334',
      olivine: '#9EB384',
      teaGreen: '#CEDEBD',
    },
    extend: {},
  },
  plugins: [],
};
