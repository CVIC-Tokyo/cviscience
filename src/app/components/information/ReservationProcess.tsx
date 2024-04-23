import React from "react";
import { getLocaleData } from "@/utils/helpers";

const ReservationProcess: React.FC<ReservationProcessProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);

  // Separate content into different sections
  const firstThreeLines = localeData.RESERVATION_PROCESS.CONTENT.slice(0, 3);
  const nextFourLines = localeData.RESERVATION_PROCESS.CONTENT.slice(3, 8);
  const otherLines = localeData.RESERVATION_PROCESS.CONTENT.slice(8);

  return (
    <div className="w-full bg-white/25 p-4">
      <div className="bg-white p-4 text-xs md:text-base rounded-lg">
        <h2 className="font-semibold text-base md:text-lg text-cvic-red">
          {localeData.RESERVATION_PROCESS.TITLE}
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-around p-2 w-full">
          <ul className="border-2 p-2 rounded-lg font-semibold">
            {/* First three lines */}
            {firstThreeLines.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
          {/* Next four lines */}
          <ul className="border-2 p-2 rounded-lg">
            {nextFourLines.map((item, index) => (
              <li key={index} className="list-item">
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="content flex flex-col items-start w-full md:w-[60%]">
            {/* Other lines */}
            {otherLines.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="note">{localeData.RESERVATION_PROCESS.NOTE}</p>
      </div>
    </div>
  );
};

export default ReservationProcess;
