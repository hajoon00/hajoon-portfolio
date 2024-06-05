/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // other plugins...
  ],
};
