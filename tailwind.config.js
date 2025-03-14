const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|dropdown|input|modal|navbar|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-jakarta)'],
        content: ['var(--font-karla)'],
        ibara: ['var(--font-ibara)'],
      },
      colors: {
        "blue-primary": "#1A3783",
        "blue-secondary": "#0071B7",
        "white-secondary": "#F8F8F8",
        "dark-primary": "#0A1124",
        "xmas-neutral": "#FDFAF1",
        "xmas-primary": "#67171A",
        "xmas-tertiary": "#B6A190",
        "xmas-secondary": "#977E49",
        "xmas-dark": "#232323"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
