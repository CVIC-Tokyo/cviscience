import React from "react";
import { getLocaleData } from "@/utils/helpers";

const ReservationProcess: React.FC<ReservationProcessProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);

  // Separate content into different sections
  const firstThreeLines = localeData.RESERVATION_PROCESS.CONTENT.slice(0, 3);
  const nextFourLines = localeData.RESERVATION_PROCESS.CONTENT.slice(3, 8);
  const otherLines = localeData.RESERVATION_PROCESS.CONTENT.slice(8);

  return (
    <div className="w-full bg-gradient-to-r from-cvic-red via-blue-500 to-cvic-red p-4 md:p-8">
      <div className="bg-white p-4 md:p-8 text-base md:text-lg text-gray-800 rounded-lg shadow-lg">
        <h2 className="font-semibold text-xl md:text-2xl text-cvic-red mb-4 md:mb-6">
          {localeData.RESERVATION_PROCESS.TITLE}
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-around p-2 w-full">
          <ul className="border-2 p-2 rounded-lg bg-gray-100 text-sm md:text-base">
            {/* First three lines */}
            {firstThreeLines.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
          {/* Next four lines */}
          <ul className="border-2 p-2 rounded-lg bg-gray-100 mt-4 md:mt-0">
            {nextFourLines.map((item, index) => (
              <li key={index} className="list-item text-sm md:text-base">
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full p-2">
          <p className="text-white bg-cvic-red rounded-md p-2 font-semibold text-sm md:text-base">
            {localeData.RESERVATION_NOTICE.SUNDAY}
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="content flex flex-col items-start w-full md:w-[60%] bg-gray-100 rounded-lg p-4">
            {/* Other lines */}
            {otherLines.map((item, index) => (
              <li key={index} className="list-item text-[10px] md:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="note text-[10px] md:text-sm text-gray-500 mt-4">
          {localeData.RESERVATION_PROCESS.NOTE}
        </p>
      </div>
    </div>
  );
};

export default ReservationProcess;
