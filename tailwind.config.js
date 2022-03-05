module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2-5': '0.4 0.4 0%',
        '3-5': '0.6 0.6 0%',
      },
      colors: {
        'primary-color': '#1E213A',
        'secondary-color': '#100E1D',
      },
      backgroundImage: {
        'clouds': "url('./assets/Cloud-background.png')",
      },
      boxShadow: {
        'btn': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}