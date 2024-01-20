module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'custom-matt-white': '#E1D9D1',
          'custom-matt-black': '#28282B',
          'custom-matt': {
            100: '#4c516d',
            200: '#e7e7e7',
            300: '#838996',
            400: '#aca5a0',
            500: '#8b8589',
            600: '#634429',
            700: '#887360',
            800: '#e0ceb3'
          },
        },
      },
    },
  };
  