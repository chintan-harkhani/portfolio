/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
     container:{
      center:true,
      padding:"15px",
     },
     screens:{
      sm :"640px",
      md:"768px",
      lg : "960px",
      xl :"1200px",
     }, 
    extend: {
    
      fontFamily: {
        primary: ["var(--font-jetbrainsMono)"]
        //sans: ["var(--font-primary)", "sans-serif"],
      },
      colors: {
        primary :"#1c1c22",
        accent:{
         DEFAULT :"#00ff99",
         hover :"#00e187",
        },
        background: "oklch(var(--color-background) / <alpha-value>)",
        foreground: "oklch(var(--color-foreground) / <alpha-value>)",
        border: "oklch(var(--color-border) / <alpha-value>)",
        ring: "oklch(var(--color-ring) / <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

