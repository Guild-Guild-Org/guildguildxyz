module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4285f4",
        secondary: "#34a853",
        accent: "#32cd32",
        foreground: "rgba(var(--foreground-rgba))",
        background: "rgba(var(--background-rgba))",
      },
    },
  },
  // ... other configurations
};
