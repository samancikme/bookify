/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        quicksand: '"Quicksand", serif',
        exo: '"Exo 2", serif',
      },
      theme: {
        screens: {
          'ss': "400px",
          'mm': "500px",
          'sm': "640px",
          'md': "768px",
          'lm': "958px",
          'lg': "1024px",
          'xl': "1280px",
        },
      },
    },
  },
  plugins: [],
};
