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
    extend: {
      backgroundImage: {
        home: 'url("/home.jpg")',
        about: 'url("/about.jpg")',
        cardOne: 'url("./cardOne.jpg")',
        cardTwo: 'url("./cardTwo.jpg")',
        cardThree: 'url("./cardThree.jpg")',
        cardFour: 'url("./cardFour.jpg")',
        cardFive: 'url("./cardFive.jpg")',
        cardSix: 'url("./cardSix.jpg")',
        contactImg: 'url("./contactImg.jpeg")'
      },
    },
  },
  plugins: [],
};
