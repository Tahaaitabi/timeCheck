/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "txt-clr": "#181f1c",
        "txt-hvr-clr": "#274029",
        "icon-clr": "#315c2b",
        "border-clr": "#60712f",
        "bg-clr": "#9ea93f",
      }
    },
  },
  plugins: [],
}
