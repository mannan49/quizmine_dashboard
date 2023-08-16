/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#162e5b",
        secondary: "#ef6f7f",
        secondary_light: "#e898a6",
        // Background of Sidebar
        headline: "#f0f3f4",
        main: "#ffffff",
        /* Above color is fully white */
        tertiary: "#4fc194",
        ternary: "#999fbb",
        ternary_light: "rgb(153,159,187, 0.85)",
      },

      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/forms"),
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  },
};
