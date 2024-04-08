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
    <div className="flex items-center justify-center p-4 md:p-16 tracking-wide">
      <div className="w-full max-w-[1500px] h-auto p-2 md:p-12 flex flex-col items-center justify-center">
        <Reveal>
          <div className="bg-white md:bg-white/75 p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.MISSION_TITLE}</h1>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.MISSION}</p>
            </Reveal>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white md:bg-white/75 p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.VISION_TITLE}</h1>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.VISION}</p>
            </Reveal>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white md:bg-white/75 p-2 m-2 rounded-lg h-auto flex flex-col mx-auto items-center justify-center">
            <Reveal>
              <h1 className="about-title">{localeData.ABOUT.CSR_TITLE}</h1>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">{localeData.ABOUT.CSR.ONE_TITLE}</h2>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.CSR.ONE}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">{localeData.ABOUT.CSR.TWO_TITLE}</h2>
            </Reveal>
            <Reveal>
              <p className="p-4">{localeData.ABOUT.CSR.TWO}</p>
            </Reveal>
            <Reveal>
              <h2 className="font-bold p-2">{localeData.ABOUT.CSR.THREE_TITLE}</h2>
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
