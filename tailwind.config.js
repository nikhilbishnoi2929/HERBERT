/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "24px",
        },
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1188px",
        },
      },
      screens: {
        xsm: "400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        card_Shadow: "0px 0px 16px 6px #8080801F",
        btn_Shadow: "0px 0px 10px 0px #FF9748",
      },
      colors: {
        orange: "#FF4C24",
        black: "#010101",
        gray: "#5F5F5F",
        btnOrange: "#FF9748",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        headerBg: `url("./assets/images/webp/Hero.webp")`,
        footerBg: `url("./assets/images/webp/footerBg.webp")`,
      },
      fontSize: {
        "10xl": "44px",
        "11xl": "56px"
      }
    },
  },
  plugins: [],
}

