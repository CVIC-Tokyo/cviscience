"use client";

import React from "react";
import { useGlobalContext } from "@/context/store";
import "../../../styles/globals.css";
import { getLocaleData } from "@/utils/helpers";

const Access = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container">
      <div className="w-full bg-gradient-to-b from-blue-300 to-blue-200 p-4 rounded-lg shadow-lg">
        <div className="p-4 md:p-8 text-base md:text-lg text-white">
          <div className="w-full h-auto p-4 flex items-center justify-center">
            <div className="w-[220px] h-[220px] md:w-[550px] md:h-[550px] bg-maps bg-cover border-2 bg-center"></div>
          </div>
          {/* JR Chuo/Sobu Line */}
          <div className="access-info flex flex-col p-4 bg-white bg-opacity-90 rounded-lg my-4 md:my-6">
            <h3 className="font-semibold text-lg text-cvic-red mb-4">
              {localeData.LOCATION_INFORMATION.JR_CHUO_SOBU_LINE.TITLE}
            </h3>
            <ul className="list-disc list-inside flex flex-col items-start">
              {localeData.LOCATION_INFORMATION.JR_CHUO_SOBU_LINE.DESCRIPTION.map(
                (item, index) => (
                  <li key={index} className="mb-2 text-black">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          {/* Divider */}
          <hr className="my-4 border-cvic-red" />
          {/* Tokyo Metro Lines */}
          <div className="access-info flex flex-col p-4 bg-white bg-opacity-90 rounded-lg my-4 md:my-6">
            <h3 className="font-semibold text-lg text-cvic-red mb-4">
              {localeData.LOCATION_INFORMATION.TOKYO_METRO_LINES.TITLE}
            </h3>
            <ul className="list-disc list-inside flex flex-col items-start">
              {localeData.LOCATION_INFORMATION.TOKYO_METRO_LINES.DESCRIPTION.map(
                (item, index) => (
                  <li key={index} className="mb-2 text-black">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          {/* Divider */}
          <hr className="my-4 border-cvic-red" />
          {/* Taxi */}
          <div className="access-info flex flex-col p-4 bg-white bg-opacity-90 rounded-lg my-4 md:my-6">
            <h3 className="font-semibold text-lg text-cvic-red mb-4">
              {localeData.LOCATION_INFORMATION.TAXI.TITLE}
            </h3>
            <p className="mb-4 text-black">
              {localeData.LOCATION_INFORMATION.TAXI.DESCRIPTION}
            </p>
          </div>
          {/* Divider */}
          <hr className="my-4 border-cvic-red" />
          {/* Car */}
          <div className="access-info flex flex-col p-4 bg-white bg-opacity-90 rounded-lg my-4 md:my-6">
            <h3 className="font-semibold text-lg text-cvic-red mb-4">
              {localeData.LOCATION_INFORMATION.CAR.TITLE}
            </h3>
            <p className="mb-4 text-black">
              {localeData.LOCATION_INFORMATION.CAR.DESCRIPTION}
            </p>
          </div>
          {/* Divider */}
          <hr className="my-4 border-cvic-red" />
          {/* Wheelchair */}
          <div className="access-info flex flex-col p-4 bg-white bg-opacity-90 rounded-lg my-4 md:my-6">
            <h3 className="font-semibold text-lg text-cvic-red mb-4">
              {localeData.LOCATION_INFORMATION.WHEELCHAIR.TITLE}
            </h3>
            <p className="mb-4 text-black">
              {localeData.LOCATION_INFORMATION.WHEELCHAIR.DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
