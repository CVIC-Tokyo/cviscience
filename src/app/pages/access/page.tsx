"use client";

import React from "react";
import { useGlobalContext } from "@/context/store";
import "../../../styles/globals.css";
import { getLocaleData } from "@/utils/helpers";

const Access = () => {
  const { locale } = useGlobalContext(); // Assuming useGlobalContext provides access to locale data
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container">
      <div className="w-full bg-white/25 p-4">
        <div className="p-1 md:p-4 text-xs md:text-base">
          <div className="w-full h-auto p-4 flex items-center justify-center">
            <div className="w-[220px] h-[220px] md:w-[550px] md:h-[550px] bg-maps bg-cover border-2 bg-center"></div>
          </div>
          {/* JR Chuo/Sobu Line */}
          <div className="access-info flex flex-col p-1 bg-white rounded-lg my-2">
            <h3 className="font-semibold text-lg text-cvic-red mb-2">
              {localeData.LOCATION_INFORMATION.JR_CHUO_SOBU_LINE.TITLE}
            </h3>
            <ul className="list-disc list-inside flex flex-col items-start p-2">
              {localeData.LOCATION_INFORMATION.JR_CHUO_SOBU_LINE.DESCRIPTION.map(
                (item, index) => (
                  <li key={index} className="mb-1">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Tokyo Metro Lines */}
          <div className="access-info flex flex-col p-1 bg-white rounded-lg my-2">
            <h3 className="font-semibold text-lg text-cvic-red mb-2">
              {localeData.LOCATION_INFORMATION.TOKYO_METRO_LINES.TITLE}
            </h3>
            <ul className="list-disc list-inside flex flex-col items-start p-2">
              {localeData.LOCATION_INFORMATION.TOKYO_METRO_LINES.DESCRIPTION.map(
                (item, index) => (
                  <li key={index} className="mb-1">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Taxi */}
          <div className="access-info flex flex-col p-1 bg-white rounded-lg my-2">
            <h3 className="font-semibold text-lg text-cvic-red mb-2">
              {localeData.LOCATION_INFORMATION.TAXI.TITLE}
            </h3>
            <p className="mb-2">
              {localeData.LOCATION_INFORMATION.TAXI.DESCRIPTION}
            </p>
          </div>

          {/* Car */}
          <div className="access-info flex flex-col p-1 bg-white rounded-lg my-2">
            <h3 className="font-semibold text-lg text-cvic-red mb-2">
              {localeData.LOCATION_INFORMATION.CAR.TITLE}
            </h3>
            <p className="mb-2">
              {localeData.LOCATION_INFORMATION.CAR.DESCRIPTION}
            </p>
          </div>
          <div className="access-info flex flex-col p-1 bg-white rounded-lg my-2">
            <h3 className="font-semibold text-lg text-cvic-red mb-2">
              {localeData.LOCATION_INFORMATION.WHEELCHAIR.TITLE}
            </h3>
            <p className="mb-2">
              {localeData.LOCATION_INFORMATION.WHEELCHAIR.DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
