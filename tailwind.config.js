/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mm: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mochari: ["Mocha Mattari W01 Regular", "sans-serif"],
      DKLeomn: ["DK Lemon Yellow Sun", "sans-serif"],
      SantHelena: ["SantEliaScript-BoldDMO", "Mocha Mattari W01 Regular"],
    },
    extend: {
      colors: {
        "custom-white": "#FFFCF9",
        "custom-blue": "#55BECD",
        "custom-blue-strong": "#003FA5",
        "custom-choco": "#3a180e",
        "custom-bg-leiteIHT": "#79b6c9",
      },
      minHeight: {
        "height-full-96px": "calc(100vh - 64px)",
      },
      height: {
        "height-full-96px": "calc(100vh - 64px)",
      },
      width: {
        "width-mobile": "30rem",
        "width-bebida": "500px",
        "width-bebida2": "400px",
        "width-leiteUht": "700px",
      },
      margin: {
        marginTopNegativo: "174px",
      },
      maxWidth: {
        "max-w-700px": "470px",
        "max-w-leiuht": "21rem",
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
