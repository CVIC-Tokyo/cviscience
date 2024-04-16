import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { animate } from "framer-motion";

const EquipmentInfo: React.FC<EquipmentInfoProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);
  const [focus, setFocus] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[1700px]">
      <div
        onClick={() => setFocus(1)}
        className="w-full bg-white rounded-lg p-2 md:p-4 mb-4 md:mb-30 cursor-pointer"
      >
        <div className="relative bg-equipments bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
          <div className="dropdown-button absolute left-0 text-2xl md:text-[70px] text-white font-extrabold p-2 md:p-4">
            <RiArrowDownDoubleLine />
          </div>
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.TITLE}
          </p>
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
            {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.MAKER}
          </p>
        </div>
        <p
          className={`${focus === 1 ? "flex" : "hidden"} duration-500 p-8`}
        ></p>
      </div>
      <div
        onClick={() => setFocus(2)}
        className="w-full bg-white rounded-lg p-2 md:p-4 mb-4 md:mb-30 cursor-pointer"
      >
        <div className="relative bg-achieva bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
          <div className="dropdown-button absolute right-0 text-2xl md:text-[70px] text-white font-extrabold p-2 md:p-4">
            <RiArrowDownDoubleLine />
          </div>
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.MRI.ACHIEVA.TITLE}
          </p>
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
            {localeData.FACILITIES.TITLES.MRI.ACHIEVA.MAKER}
          </p>
        </div>
      </div>
      <div
        onClick={() => setFocus(3)}
        className="w-full bg-white rounded-lg p-2 md:p-4 mb-4 md:mb-30 cursor-pointer"
      >
        <div className="relative bg-incisive bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
          <div className="dropdown-button absolute left-0 text-2xl md:text-[70px] text-white font-extrabold p-2 md:p-4">
            <RiArrowDownDoubleLine />
          </div>
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.CT.INCISIVE.TITLE}
          </p>
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
            {localeData.FACILITIES.TITLES.CT.INCISIVE.MAKER}
          </p>
        </div>
      </div>
      <div
        onClick={() => setFocus(4)}
        className="w-full bg-white rounded-lg p-2 md:p-4 mb-4 md:mb-30 cursor-pointer"
      >
        <div className="relative bg-zio bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
          <div className="dropdown-button absolute right-0 text-2xl md:text-[70px] text-white font-extrabold p-2 md:p-4">
            <RiArrowDownDoubleLine />
          </div>
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.ZIO.TITLE}
          </p>
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
            {localeData.FACILITIES.TITLES.ZIO.MAKER}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentInfo;
