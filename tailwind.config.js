/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    &rsquo;./src/pages/**/*.{js,ts,jsx,tsx,mdx}&rsquo;,
    &rsquo;./src/components/**/*.{js,ts,jsx,tsx,mdx}&rsquo;,
    &rsquo;./src/app/**/*.{js,ts,jsx,tsx,mdx}&rsquo;,
  ],
  darkMode: &rsquo;class&rsquo;, // This enables dark mode with the &rsquo;class&rsquo; strategy
  theme: {
    extend: {
      colors: {
        // You can define custom colors here
      },
    },
  },
  plugins: [],
}
