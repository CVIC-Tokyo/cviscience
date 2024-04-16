import React from "react";
import { getLocaleData } from "@/utils/helpers";

const EquipmentInfo: React.FC<EquipmentInfoProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full max-w-[1700px]">
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4 mb-4 md:mb-30">
        <div className="bg-equipments bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.TITLE}
          </p>  
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">{localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.MAKER}</p>
        </div>
      </div>
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4 mb-4 md:mb-30">
        <div className="bg-achieva bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.MRI.ACHIEVA.TITLE}
          </p>  
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">{localeData.FACILITIES.TITLES.MRI.ACHIEVA.MAKER}</p>
        </div>
      </div>
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4 mb-4 md:mb-30">
        <div className="bg-incisive bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.CT.INCISIVE.TITLE}
          </p>  
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">{localeData.FACILITIES.TITLES.CT.INCISIVE.MAKER}</p>
        </div>
      </div>
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4 mb-4 md:mb-30">
        <div className="bg-zio bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
          <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
            {localeData.FACILITIES.TITLES.ZIO.TITLE}
          </p>  
          <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">{localeData.FACILITIES.TITLES.ZIO.MAKER}</p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentInfo;
