/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: '"Merriweather", system-ui',
        roboto: '"Roboto", sans-serif',
      },
      colors: {
        themeColor: "#FF2400",
        themeSecendary: "#FE6A13",
        themeAccent: "#532810",
      },
    },
  },
  plugins: [require("daisyui")],
};
