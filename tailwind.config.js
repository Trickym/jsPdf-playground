/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using a CSS class
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {},
  },
};
