/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        threeline: ["Bungee Outline", "cursive"],
      
      },
      backgroundImage: {
        'hero-pattern': "url('/Rect.png')",
       
      },
      spacing: {
        '84': '20rem',
      },
      colors: {
        "custom-yellow": "#FFA921",
        "custom-light-yellow": "#FFEAC9",
        "custom-verylight-yellow": "#FFFAF3",
        "custom-grey": "#747373",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
