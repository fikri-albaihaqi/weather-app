/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clear-sky': "url('./src/assets/clear-sky.jpg')",
        'few-clouds': "url('./src/assets/few-clouds.jpg')",
        'scattered-clouds': "url('./src/assets/scattered-clouds.jpg')",
        'broken-clouds': "url('./src/assets/broken-clouds.jpg')",
        'overcast-clouds': "url('./src/assets/overcast-clouds.jpg')",
        'shower-rain': "url('./src/assets/shower-rain.jpg')",
        'rain': "url('./src/assets/rain.jpg')",
        'thunderstorm': "url('./src/assets/thunderstorm.jpg')",
        'snow': "url('./src/assets/snow.jpg')",
        'mist': "url('./src/assets/mist.jpg')",
        'haze': "url('./src/assets/haze.jpg')",
        'smoke': "url('./src/assets/smoke.jpg')",
        'dust': "url('./src/assets/dust.jpg')",
        'ash': "url('./src/assets/ash.jpg')",
        'squalls': "url('./src/assets/squalls.jpg')",
        'tornado': "url('./src/assets/tornado.jpg')",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}