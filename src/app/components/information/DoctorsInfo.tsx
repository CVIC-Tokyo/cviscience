"use client";

import React from "react";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";

const DoctorsInfo = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 text-[10px] md:text-base">
      {localeData.CAROUSEL.map((doctor, index) => {
        return (
          <div className="w-full h-full p-1 md:p-2" key={index}>
            <div className="w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-1 md:p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500">
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
