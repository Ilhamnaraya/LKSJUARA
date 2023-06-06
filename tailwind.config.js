/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: ["./admin/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        biru: "#2563eb",
        abutua: "#0f172a",
        abumuda: "#475569",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwindcss-config.js" },
    },
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false,
};
