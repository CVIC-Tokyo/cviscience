"use client";

import React from "react";
import "../../../styles/globals.css";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "../Reveal";

const ClinicInfo: React.FC<ClinicInfoProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="max-w-[1700px] w-full flex items-center justify-center tracking-wide">
      <div className="w-full h-auto p-2 flex flex-col items-center justify-center">
        <Reveal>
          <div className="bg-white md:bg-white/75 md:hover:bg-white p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.MISSION_TITLE}</h1>
            </Reveal>
            <Reveal>
              <div className="p-4 text-[12px] md:text-base">
                <div className="w-full h-[200px] md:h-[300px] lg:h-[500px] bg-terashima_message bg-cover bg-center" />
                <p className="font-bold p-2 md:p-4">
                  {localeData.CVIC_INFO.CLINIC_MISSION}
                </p>
                <p className="p-2 md:p-4">
                  {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P1}
                </p>
                <p className="p-2 md:p-4">
                  {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P2}
                </p>
                <p className="p-2 md:p-4">
                  {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P3}
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white md:bg-white/75 md:hover:bg-white p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.VISION_TITLE}</h1>
            </Reveal>
            <Reveal>
              <p className="p-4 text-[12px] md:text-base">
                {localeData.ABOUT.VISION}
              </p>
            </Reveal>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white md:bg-white/75 md:hover:bg-white p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.CSR_TITLE}</h1>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">
                {localeData.ABOUT.CSR.ONE_TITLE}
              </h2>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.CSR.ONE}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">
                {localeData.ABOUT.CSR.TWO_TITLE}
              </h2>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.CSR.TWO}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">
                {localeData.ABOUT.CSR.THREE_TITLE}
              </h2>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.CSR.THREE}</p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ClinicInfo;
