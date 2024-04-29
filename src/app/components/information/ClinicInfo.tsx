'use client'

import React, { useRef, useState } from "react";
import "../../../styles/globals.css";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "../Reveal";
import ArrowIcon from "../DropdownArrow";

const ClinicInfo: React.FC<ClinicInfoProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const [showIntroduction, setShowIntroduction] = useState<boolean>(false);
  const [showMission, setShowMission] = useState<boolean>(false);
  const [showCsr, setShowCsr] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleIntroduction = () => {
    setShowIntroduction(!showIntroduction);
  };

  const toggleMission = () => {
    setShowMission(!showMission);
  };

  const toggleCsr = () => {
    setShowCsr(!showCsr);
  };

  const handleRotationIntroduction = () => {
    setShowIntroduction(!showIntroduction);
  };

  const handleRotationMission = () => {
    setShowMission(!showMission);
  };

  const handleRotationCsr = () => {
    setShowCsr(!showCsr);
  };

  return (
    <div className="max-w-[1700px] w-full flex items-center justify-center tracking-wide">
      <div className="w-full h-auto p-2 flex flex-col items-center justify-center">
        <div className="max-w-[1700px] w-full flex items-center justify-center tracking-wide">
          <div className="w-full h-auto p-2 flex flex-col items-center justify-center">
            <Reveal>
              <div className="bg-white p-2 m-2 rounded-lg h-auto mx-auto">
                <Reveal>
                  <h1
                    className="about-title cursor-pointer"
                    onClick={toggleIntroduction}
                  >
                    {localeData.INTRODUCTION.TITLE}
                    <ArrowIcon
                      showDropdown={showIntroduction}
                      handleRotation={handleRotationIntroduction}
                    />
                  </h1>
                </Reveal>
                {showIntroduction && (
                  <Reveal>
                    <div className="p-4 text-[12px] md:text-base">
                    <p className="font-bold p-2 md:p-4">
                      {localeData.INTRODUCTION.CONTENT}
                    </p>
                    <p className="p-2 md:p-4">
                      {localeData.CVIC_DESCRIPTION.CONTENT}
                    </p>
                    <p className="p-2 md:p-4">
                      {localeData.EARLY_DETECTION.CONTENT}
                    </p>
                    <p className="p-2 md:p-4">
                      {localeData.ADVANCED_IMAGING.CONTENT}
                    </p>
                    <p className="p-2 md:p-4">
                      {localeData.ADDRESSING_NEEDS.CONTENT}
                    </p>
                    <p className="p-2 pb-0 md:p-4 md:pb-0 font-bold">
                      {localeData.CONTINUOUS_IMPROVEMENT.CONTENT}
                    </p>
                    <p className="">{localeData.NEW_CVIC_GROUP.CONTENT}</p>
                  </div>
                  </Reveal>
                )}
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="bg-white p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1
                className="about-title cursor-pointer"
                onClick={toggleMission}
              >
                {localeData.ABOUT.MISSION_TITLE}
                <ArrowIcon
                  showDropdown={showMission}
                  handleRotation={handleRotationMission}
                />
              </h1>
            </Reveal>
            {showMission && (
              <Reveal>
                <div
                  className="w-full h-[200px] md:h-[300px] lg:h-[500px] bg-terashima_message bg-cover bg-center"
                />
              </Reveal>
            )}
            {showMission && (
              <Reveal>
                <div className="p-4 text-[12px] md:text-base">
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
                  <p className="p-2 pb-0 md:p-4 md:pb-0 font-bold">
                    {localeData.DOCTORS.TERASHIMA}
                  </p>
                  <p className="md:px-20">{localeData.DOCTORS.TERASHIMA_TITLE}</p>
                </div>
              </Reveal>
            )}
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white p-2 m-2 rounded-lg h-auto mx-auto">
            <Reveal>
              <h1
                className="about-title text-sm md:text-base cursor-pointer"
                onClick={toggleCsr}
              >
                {localeData.ABOUT.CSR_TITLE}
                <ArrowIcon
                  showDropdown={showCsr}
                  handleRotation={handleRotationCsr}
                />
              </h1>
            </Reveal>
            {showCsr && (
              <Reveal>
                <div className="flex flex-col md:grid grid-cols-3">
                  <div>
                    <Reveal>
                      <h2 className="font-bold p-2">
                        {localeData.ABOUT.CSR.ONE_TITLE}
                      </h2>
                    </Reveal>
                    <Reveal>
                      <p className="p-4 text-[12px] md:text-sm">
                        {localeData.ABOUT.CSR.ONE}
                      </p>
                    </Reveal>
                  </div>
                  <div>
                    <Reveal>
                      <h2 className="font-bold p-2">
                        {localeData.ABOUT.CSR.TWO_TITLE}
                      </h2>
                    </Reveal>
                    <Reveal>
                      <p className="p-4 text-[12px] md:text-sm">
                        {localeData.ABOUT.CSR.TWO}
                      </p>
                    </Reveal>
                  </div>
                  <div>
                    <Reveal>
                      <h2 className="font-bold p-2">
                        {localeData.ABOUT.CSR.THREE_TITLE}
                      </h2>
                    </Reveal>
                    <Reveal>
                      <p className="p-4 text-[12px] md:text-sm">
                        {localeData.ABOUT.CSR.THREE}
                      </p>
                    </Reveal>
                  </div>
                  </div>    
              </Reveal>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ClinicInfo;
