import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "cvic-dark": '#820000',
      "cvic-red": "#8C1515",
      "cvic-light": "#B83A4B",
      "white": '#FFFFFF',
      "black": '#000000'
    },
    extend: {
      backgroundImage: {
        parallax: 'url("/images/access_image.jpg")',
        services: 'url("/images/services_image.JPG")',
        equipments: 'url("/images/vintage_titan.jpg")',
        doctors: 'url("/images/doctors_image.JPG")',
      },
    },
  },
  plugins: [],
};
export default config;
