/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        default: "#150050",
        primary: "#3F0071",
        secondary: "#610094",
      },

      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
      },
    },
  },
  plugins: ["daisyui"],
};
