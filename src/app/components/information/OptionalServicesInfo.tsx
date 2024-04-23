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

  // Shuffle the array to randomize the colors
  const shuffledColors = backgroundColors.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.values(localeData.SERVICES.CVIC_EXAMS).map((service, index) => (
          <div key={index} className="relative rounded-lg shadow-lg bg-white pb-12">
            <div style={{ backgroundColor: shuffledColors[index] }} className="rounded-t-lg p-2">
              <h3 className="text-white font-bold text-lg md:text-2xl">{service.TITLE}</h3>
            </div>
            <div className="p-2">
              <p className="text-xs md:text-sm lg:text-base mb-4 p-2">{service.DESCRIPTION}</p>
            </div>
            <div className="py-4">
              <p className="font-semibold text-sm md:text-base lg:text-lg">{service.PRICE}</p>
            </div>
            <Link className={`absolute bottom-2 right-2 bg-cvic-red text-white px-4 py-2 rounded-md`} href={'/pages/reservation'}>
              <p className='text-xs md:text-base'>{localeData.RESERVATION.TITLE}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionalServicesInfo;
