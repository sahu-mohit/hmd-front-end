// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
    // Any other plugins you want to include can be added here
  ],
  themes: [
    "light",
    "dark",
  ]
};
