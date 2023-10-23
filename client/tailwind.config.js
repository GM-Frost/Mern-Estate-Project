/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      xl: "1440px",
      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#7166f0",
      primaryLight: "#867bfc",
      primaryDark: "#493fb8",
      secondary: "#34a4b8",
      secondaryDark: "#1c737e",
      secondaryLight: "#00bcd4",
      neutral: "#f2c94c",
      light: "#ffffff",
      dark: "#111111",
      baseDark: "#424242",
      baseLight: "#9e9e9e",
      extraLight: "#f5f5f5",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
