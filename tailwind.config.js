/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clear-sky': "url('https://images.unsplash.com/photo-1541734091135-d4a3c6235ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
        'few-clouds': "url('https://images.unsplash.com/photo-1572272195904-f64d9c02c5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80')",
        'scattered-clouds': "url('https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80')",
        'broken-clouds': "url('https://images.unsplash.com/photo-1487637492519-6195a5cc0fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')",
        'overcast-clouds': "url('https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')",
        'shower-rain': "url('https://images.pexels.com/photos/1915182/pexels-photo-1915182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'rain': "url('https://images.pexels.com/photos/3387175/pexels-photo-3387175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'thunderstorm': "url('https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        'snow': "url('https://images.unsplash.com/photo-1431036101494-66a36de47def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80')",
        'mist': "url('https://images.unsplash.com/photo-1585508889431-a1d0d9c5a324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')",
        'haze': "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80')",
        'smoke': "url('https://images.pexels.com/photos/266558/pexels-photo-266558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'dust': "url('https://images.unsplash.com/photo-1511514323702-88e7e52f5223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        'ash': "url('https://images.unsplash.com/photo-1516536032882-8fa1f10ecd27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')",
        'squalls': "url('https://images.unsplash.com/photo-1592678043083-dd322655ad1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80')",
        'tornado': "url('https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}