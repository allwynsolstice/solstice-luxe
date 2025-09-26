/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1115",
        card: "#161a22",
        text: "#eaeaf1",
        muted: "#b7b9c7",
        brand: "#ffd27b",
        accent: "#9fd3ff"
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)"
      }
    },
  },
  plugins: [],
}
