/* eslint-env node */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00AC8E",
          "1": "#00AC8E",
          "2": "#008A72",
          "3": "#B3E6DD",
          "4": "#F2FBF9",
        },
        brand: {
          from: "#00AC8E",
          to: "#0097E0"
        },
        neutral: {
          "1": "#222",
          "2": "#54585A",
          "3": "#76797B",
          "4": "#A1A1A1",
          "5": "#DDDEDE",
          "6": "#EAEBEB",
          "7": "#F8F8F8",
          "8": "#000000",
        },
        secondary: {
          "1": "#F44444",
          "2": "#FADB14",
          "3": "#1890FF",
          "4": "#126CBF"
        }
      }
    },
  },
  plugins: [],
}
