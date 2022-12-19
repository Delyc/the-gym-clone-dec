/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue" : "#072140",
        "primary-blue" : "#3070B3",
        "primary-gray" : "#E8ECEF",
        "primary-purple" : "#8F81EA",
        "whitish-purple" : "#EFEDFC",
        "dark-orange" : "#EA7237",
        "primary-yellow" : "#F7B11E",
        "secondary-purple" : "#B55CA5"
      },
      fontSize:{
        "13.3333" : "13.3333px",
        "2.3xl" : "28px",
        "2.5xl" : "32px",
        "16" : "16px"
      },
      padding:{
        "15" : "60px"
      },
      lineHeight:{
        "4.5" : "1.1"
      },
      width:{
        "784" : "784px",
        "712" : "712px"

      },
      height:{
        "479.2" : "479.2px"
      },
    
    },
  },
  plugins: [],
}