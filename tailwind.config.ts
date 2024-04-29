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
    extend: {
      colors: {
        "cvic-dark": "#820000",
        "cvic-red": "#8C1515",
        "cvic-light": "#B83A4B",
      },
      backgroundImage: {
        parallax_sm: 'url("/images/home/blue-wallpaper.jpg")',
        parallax: 'url("/images/home/access_image.png")',
        services: 'url("/images/tiles/services_image.JPG")',
        equipments: 'url("/images/tiles/vintage_titan.jpg")',
        doctors: 'url("/images/tiles/doctors_image.JPG")',
        staff: 'url("/images/tiles/staff_image.png")',
        parallax_small: 'url("/images/access_image_sm.jpg")',
        logo_600: 'url("/logos/cvic_logo_600.png")',
        doctors_full: 'url("/images/doctors/CVIC_3.JPG")',
        drIto: 'url("/images/doctors/DrItoJ.jpg")',
        drTerashima: 'url("/images/doctors/DrTerashima.jpg")',
        drItoJ: 'url("/images/doctors/DrItoM.jpg")',
        drWatanabe: 'url("/images/doctors/DrWatanabe.jpg")',
        drTanabe: 'url("/images/doctors/DrTanabe.jpg")',
        drTakamura: 'url("/images/doctors/DrTakamura.jpg")',
        terashima_message: 'url("/images/home/terashima_sensei.jpg")',
        zio: 'url("/images/equipments/ziostation2.png")',
        achieva: 'url("/images/equipments/achieva.jpg")',
        incisive: 'url("/images/equipments/incisive.jpg")',
        maps: 'url("/images/access/maps.webp")',
        case: 'url("/images/home/cases.webp")'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
