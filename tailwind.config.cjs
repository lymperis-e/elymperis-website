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
    themes: ['retro',
      {
        ...require("daisyui/src/colors/themes")["[data-theme=retro]"],
        retro: {
          "base-100": "#fffef5",
          "primary": "#005753",
          "secondary": "#c16b29",
          "accent": "#fad44d",
          "muted": "#9ab7df",

        }
      },

      {
        "catppuccin": {
          primary: "#5d7abf", // blue
          secondary: "#f4b8e4", // pink
          accent: "#81c8be", // teal
          neutral: "#232634", // crust
          "base-100": "#040422", // base
          info: "#85c1dc", // sapphire
          success: "#a6d189", // green
          warning: "#e5c890", // yellow
          error: "#e78284", // red
        },
      }
    ]
  }
}/** @type {import('tailwindcss').Config} */