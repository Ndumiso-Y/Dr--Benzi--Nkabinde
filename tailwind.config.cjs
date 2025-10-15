module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:  "#0B1E3D",
          cream: "#F2EED9",
          orange:"#B7391C",
          dark:  "#111316",
          gray:  "#BFC5CC",
          link:  "#C9D7FF"
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
