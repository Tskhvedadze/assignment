/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Georgian"],
      },
      colors: {
        black_600: "#657178",
        main_bg: "#F2F3F7",
        primary_light: "#F5F8FF",
      },
      screens: {
        desktopSM: "1241px",
        tablet: "1025px",
        mobile: "601px",
      },
    },
  },
  plugins: [],
};
