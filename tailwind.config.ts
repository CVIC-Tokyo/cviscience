import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "cvic-dark": "#820000",
      "cvic-red": "#8C1515",
      "cvic-light": "#B83A4B",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        parallax_sm: 'url("/images/access_sm.jpg")',
        parallax: 'url("/images/access_image.jpg")',
        services: 'url("/images/services_image.JPG")',
        equipments: 'url("/images/vintage_titan.jpg")',
        doctors: 'url("/images/doctors_image.JPG")',
        parallax_small: 'url("/images/access_image_sm.jpg")',
        logo_600: 'url("/logos/cvic_logo_600.png")',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
