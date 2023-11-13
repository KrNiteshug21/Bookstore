/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-clr-dark": "var(--primary-clr-dark)",
        "primary-clr-purple": "var(--primary-clr-purple)",
        "primary-clr-violet": "var(--primary-clr-violet)",
        "border-clr": "var(--border-clr)",
        "primary-bg-clr": "var(--primary-bg-clr)",
      },
    },
  },
  plugins: [],
};
