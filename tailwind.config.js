/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This enables dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        // You can define custom colors here
      },
    },
  },
  plugins: [],
}
