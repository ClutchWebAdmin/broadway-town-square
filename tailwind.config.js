/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "var(--primaryDark)",
        primaryLight: "var(--primaryLight)",
        primaryAccent: "var(--primaryAccent)",
      },
      fontFamily: {
        sans: ["var(--font-supreme)"],
      },
    },
  },
  plugins: [],
};
