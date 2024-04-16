"use client";

import React from "react";
import { getLocaleData } from "@/utils/helpers";

const DoctorsInfo: React.FC<DoctorsInfoProps> = ({ locale, focus, setFocus }) => {
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 text-[10px] md:text-base p-1 md:p-2">
      {localeData.CAROUSEL.map((doctor, index) => {
        return (
          <div className="w-full h-full p-1 md:p-2" key={index}>
            <div
              onClick={() => {setFocus(index)}}
              className={`w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-1 md:p-2 rounded-lg shadow-xl  ${focus === index ? 'bg-cvic-red/75 text-white' : 'bg-white hover:scale-105 duration-500 cursor-pointer'}`}>
              <img src={doctor.img} className="w-[80px] h-[100px] md:w-[160px] md:h-[190px]"/>
              <p className="p-2 md:p-4 font-bold">{doctor.name}</p>
              <p className="p-2 md:p-4">{doctor.title}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default DoctorsInfo;
