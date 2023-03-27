/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#EFEFEB",
        "showcase": "#200D2B",
        "card": "rgba(255, 199, 0, 0.7)",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      width: {
        "9/10": "90%",
        "3/5": "60%",
        "9/20": "45%",
        "1/3": "33%",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      textColor: {
        "main": "#282828",
        "showcase": "#FFFFFF",
      },
      fontSize: {
        "huge": "10rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      splitTheme: {
        primary: "#FFC700",
      },
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
