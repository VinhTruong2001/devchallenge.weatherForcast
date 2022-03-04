module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '1-3': '0.25 0.25 0%',
        '2-3': '0.75 0.75 0%',
      },
      colors: {
        'primary-color': '#1E213A',
        'secondary-color': '#100E1D',
      },
      backgroundImage: {
        'clouds': "url('./assets/Cloud-background.png')",
        'hails': "url('./assets/Hails.png')",
        'haevy-cloud': "url('./assets/HeavyCloud.png')",
        'light-cloud': "url('./assets/LightCloud.png')",
        'light-rain': "url('./assets/LightRain.png')",
        'shower': "url('./assets/Shower.png')",
        'sleet': "url('./assets/Sleet.png')",
        'snow': "url('./assets/Snow.png')",
        'thunderstorm': "url('./assets/Thunderstorm.png')",
      },
      boxShadow: {
        'btn': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}