/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      typography: {
        full: {
          css: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
