"use client";

import React, { useState } from "react";
import "../../../styles/globals.css";
import DoctorsInfo from "@/app/components/information/DoctorsInfo";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";
import History_Carousel from "@/app/components/information/HistoryCarousel";

const DoctorsPage: React.FC<DoctorsPageProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const [focus, setFocus] = useState(0);

  return (
    <div className="w-full h-full">
      <div className="page-container">
        <div className="w-full h-[150px] md:h-[250px] lg:h-[500px] bg-doctors_full bg-center bg-cover">
          <div className="w-full h-full flex justify-center items-center text-cvic-red font-bold text-2xl md:text-4xl">
            {localeData.DOCTORS.TITLE}
          </div>
        </div>
        <div className="w-f ull h-full bg-white/20 p-2">
          <div className="w-full h-auto mb-4">
            <DoctorsInfo locale={locale} focus={focus} setFocus={setFocus} />
            <History_Carousel locale={locale} focus={focus} setFocus={setFocus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
