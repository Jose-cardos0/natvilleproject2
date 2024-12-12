/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mochari: ["Mocha Mattari W01 Regular", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-white": "#FFFCF9",
        "custom-blue": "#55BECD",
        "custom-blue-strong": "#003FA5",
        "custom-choco": "#f69d2b",
      },
      minHeight: {
        "height-full-96px": "calc(100vh - 96px)",
      },
      height: {
        "height-full-96px": "calc(100vh - 96px)",
      },
      width: {
        "width-mobile": "30rem",
      },
    },
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
