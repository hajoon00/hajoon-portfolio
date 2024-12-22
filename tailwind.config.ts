import type { Config } from 'tailwindcss'
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        hajoon: 
        {
          200: `#9CB3C9`,
          500: '#264E73',
          700: `#0A2743`,
          900: '#001223',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // other plugins...
  ],
} satisfies Config
