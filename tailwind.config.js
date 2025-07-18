/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"], // Disable dark mode and use only the light theme
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")], // Add DaisyUI as a plugin
};
