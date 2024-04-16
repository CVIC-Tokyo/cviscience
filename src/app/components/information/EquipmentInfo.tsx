import React from "react";
import { getLocaleData } from "@/utils/helpers";

const EquipmentInfo: React.FC<EquipmentInfoProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full max-w-[1700px]">
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4">
        <div className="bg-equipments bg-cover bg-center h-[140px] md:h-[500px] w-full flex items-center justify-center">
          <p className="text-base md:text-[50px] text-white font-bold outline-4">
            {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN}
          </p>
        </div>
      </div>
      <div className="w-full bg-white md:bg-white/80 rounded-lg md:hover:bg-white p-2 md:p-4">
        <div className="bg-zio bg-cover bg-center h-[140px] md:h-[500px] w-full flex items-center justify-center" />
        <div className="w-full p-2 md:p-6">
          <p className="text-[9px] md:text:base">
            {localeData.FACILITIES.DESCRIPTIONS.ZIO.D1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentInfo;
