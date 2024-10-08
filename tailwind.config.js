/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#060608",
        secondary: "#0092ca",
        tertiary: "#f4f4f5",   
        xd: "rgb(0,0,0)",  
        asasd: "#999",
        thisIsDevelop: "#f3e4f9",        
        anotherDevelop: "rgb(23,54,33)",
      },      
    },
  },
  plugins: [],
};
