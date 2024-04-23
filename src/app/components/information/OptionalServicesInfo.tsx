import React from "react";
import { getLocaleData } from "@/utils/helpers";
import Link from "next/link";

const OptionalServicesInfo: React.FC<OptionalServicesInfoProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);

  // Define an array of background colors
  const backgroundColors = [
    "#00796b",
    "#512da8",
    "#388e3c",
    "#d32f2f",
    "#1976d2",
    "#c2185b",
    "#f57c00",
    "#5d4037",
    "#0288d1",
    "#7b1fa2",
    "#afb42b",
    "#009688",
  ];

  // Function to get the color code based on type
 // Function to get the color code based on type
const getColorCode = (type: string): string => {
  switch (type) {
    case "MRI":
      return backgroundColors[0];
    case "CT":
      return backgroundColors[1];
    case "エコー":
    case "Ultrasound":
      return backgroundColors[2];
    case "血圧 脈波":
    case "Blood Pressure Pulse Wave":
      return backgroundColors[3];
    case "採血":
    case "Blood Draw":
      return backgroundColors[4];
    case "心電計":
    case "Electrocardiogram":
      return backgroundColors[5];
    default:
      return backgroundColors[0]; // Default color for unknown types
  }
};


  // Shuffle the array to randomize the colors
  const shuffledColors = backgroundColors.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.values(localeData.OPTIONAL_TESTS).map((service, index) => (
          <div key={index} className="relative rounded-lg shadow-lg bg-white pb-12">
            <div style={{ backgroundColor: getColorCode(service.TYPE) }} className="rounded-t-lg p-2">
              <h3 className="text-white font-bold text-lg md:text-2xl">{service.TITLE.replace(/[a-zA-Z]\d- /g, "")}</h3>
            </div>
            <div className="p-2">
              <p className="text-xs md:text-sm lg:text-base mb-4 p-2">{service.DESCRIPTION}</p>
            </div>
            <div className="py-4">
              <p className="font-semibold text-sm md:text-base lg:text-lg">◆ {service.PRICE.replace("*", "")}</p>
            </div>
            <div className="py-4">
              <p className="text-xs md:text-sm lg:text-base">{localeData.BASIC.REQUIRED_TIME}: {service.TIME}</p>
              <div className="w-full flex flex-row items-center justify-center">
                <p className="text-xs md:text-sm lg:text-base">{localeData.BASIC.TYPE}: {service.TYPE}</p>
                <div
                className="ml-1 w-2 h-2 rounded-full"
                style={{ backgroundColor: getColorCode(service.TYPE) }}/>
                </div>
              </div>
            <Link 
              style={{ backgroundColor: getColorCode(service.TYPE) }}
              className={`absolute bottom-2 right-2 text-white px-4 py-2 rounded-md`} href={'/pages/reservation'}>
              <p className='text-xs md:text-base'>{localeData.RESERVATION.TITLE}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionalServicesInfo;
