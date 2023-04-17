/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    /* DaisyUI react*/
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    textTransform: {
      none: 'none',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [ 'retro',
      /*{
        ...require("daisyui/src/colors/themes")["[data-theme=retro]"],
        retro: {
          "base-100": "#fffef5"
        }
      },*/
    ]
  }
}/** @type {import('tailwindcss').Config} */