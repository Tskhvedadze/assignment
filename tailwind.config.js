/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Georgian"],
        notoCaps: ["BPG Banner Caps"],
      },
      colors: {
        black_600: "#657178",
        black_900: "#1D2D35",
        main_bg: "#F2F3F7",
        primary_light: "#F5F8FF",
        primary_blue: "#585EE3",
      },
      screens: {
        desktopSM: "1241px",
        tablet: "1025px",
        mobile: "601px",
      },
    },
  },
  plugins: [
    ({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
        },

        ".scrollbar::-webkit-scrollbar": {
          width: "6px",
        },

        ".scrollbar::-webkit-scrollbar-thumb": {
          background: `${theme("colors.black_600")}`,
          borderRadius: "64px",
        },
      });
    },
  ],
};
