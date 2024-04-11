"use client";

import React from "react";
import "../../../styles/globals.css";
import DoctorsInfo from "@/app/components/information/DoctorsInfo";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";

const DoctorsPage: React.FC<DoctorsPageProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container">
      <div className="w-full h-full bg-white/20 border-2 border-cvic-red p-2">
        <div className="w-full h-[150px] md:h-[250px] lg:h-[500px] bg-doctors_full bg-center bg-cover">
          <div className="w-full h-full flex justify-center items-center text-cvic-red font-bold text-2xl md:text-4xl">
            {localeData.DOCTORS.TITLE}
          </div>
        </div>
        <div className="w-full h-auto mb-4">
          <DoctorsInfo />
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
