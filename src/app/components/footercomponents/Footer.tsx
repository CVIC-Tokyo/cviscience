"use client";

import React from "react";
import cvic_logo_600 from "../../../../public/logos/cvic_logo_box.jpg";
import Image from "next/image";
import { useGlobalContext } from "../../../context/store";
import { getLocaleData } from "@/utils/helpers";
import Contact from "./Contact";
import SNS from "./SNS";

const Footer: React.FC<FooterProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="bg-cvic-dark text-white w-full h-auto p-3 flex justify-center items-center align-bottom">
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full">
        <Image src={cvic_logo_600} width={75} height={75} alt="/CVIC logo" />
        <div className="flex flex-col items-center p-4 justify-center">
          <p className="footer-text">
            {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
          </p>
          <p className="footer-text">{localeData.CVIC_INFO.CLINIC_ADDRESS}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <SNS />
          <div className="w-full hidden md:flex">
            <Contact />
          </div>
        </div>
        <p className="text-[9px] md:text-xs">
          {localeData.CVIC_INFO.CLINIC_RIGHTS_RESERVED}
        </p>
      </div>
    </div>
  );
};

export default Footer;
