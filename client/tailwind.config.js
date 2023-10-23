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
      secondary: "#7e5bef",
      neutral: "#ff49db",
      light: "#ffffff",
      dark: "#ffffff",
      body: "#ffffff",
      "text-base": "#ff7849",
      "text-muted": "#13ce66",
      "text-inverted": "#ffc82c",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
