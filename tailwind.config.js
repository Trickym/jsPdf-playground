/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using a CSS class
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  safelist: [
    "bg-indigo-500",
    "border-indigo-500",
    "text-indigo-500",
    "bg-purple-500",
    "border-purple-500",
    "text-purple-500",
    "bg-blue-400",
    "border-blue-400",
    "text-blue-400",
    "bg-yellow-400",
    "border-yellow-400",
    "text-yellow-400",
    "bg-green-500",
    "border-green-500",
    "text-green-500",
    // add other classes you use dynamically
  ],
  theme: {
    extend: {},
  },
};
