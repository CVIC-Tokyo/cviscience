import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/images/access_image.jpg")',
        'services': 'url("/images/services_image.JPG")',
        'equipments': 'url("/images/vintage_titan.jpg")',
        'doctors': 'url("/images/doctors_image.JPG")',
      },
    },
  },
  plugins: [],
};
export default config;
