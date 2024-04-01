"use client";

import React from "react";
import "../../../styles/globals.css";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "@/app/Reveal";

const AboutPage: React.FC<AboutPageProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container flex items-center justify-center p-4 md:p-16 tracking-wide">
      <div className="w-full md:w-[90%] h-auto p-2 md:p-12">
        <Reveal>
          <h1 className="text-lg h-auto p-2 text-white bg-cvic-red flex justify-center items-center">
            {localeData.ABOUT.MISSION_TITLE}
          </h1>
        </Reveal>
        <Reveal>
          <p className="h-[40vh]">{localeData.ABOUT.MISSION}</p>
        </Reveal>
        <Reveal>
          <h1 className="text-lg h-auto p-2 text-white bg-cvic-red flex justify-center items-center">
            {localeData.ABOUT.VISION_TITLE}
          </h1>
        </Reveal>
        <Reveal>
        <p className="h-[40vh]">{localeData.ABOUT.VISION}</p>
        </Reveal>
        <Reveal>
        <h1 className="text-lg h-auto p-2 text-white bg-cvic-red flex justify-center items-center">
          {localeData.ABOUT.CSR_TITLE}
        </h1>
        </Reveal>
        <Reveal>
          <h2 className="font-bold">{localeData.ABOUT.CSR.ONE_TITLE}</h2>
        </Reveal>
        <Reveal>
          <p className="h-[40vh]">{localeData.ABOUT.CSR.ONE}</p>
        </Reveal>
        <Reveal>
        <h2 className="font-bold">{localeData.ABOUT.CSR.TWO_TITLE}</h2>

        </Reveal>
        <Reveal>

        <p className="h-[40vh]">{localeData.ABOUT.CSR.TWO}</p>
        </Reveal>
        <Reveal>

        <h2 className="font-bold">{localeData.ABOUT.CSR.THREE_TITLE}</h2>
        </Reveal>
        <Reveal>

        <p className="h-[40vh]">{localeData.ABOUT.CSR.THREE}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutPage;
