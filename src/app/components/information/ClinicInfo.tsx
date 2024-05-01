"use client";

import React, { useRef, useState } from "react";
import "../../../styles/globals.css";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "../Reveal";
import ArrowIcon from "../DropdownArrow";
import QualitySection from "./QualitySection";
import Link from "next/link";

const ClinicInfo: React.FC<ClinicInfoProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const [showIntroduction, setShowIntroduction] = useState<boolean>(true);
  const [showMission, setShowMission] = useState<boolean>(true);

  const toggleIntroduction = () => {
    setShowIntroduction(!showIntroduction);
  };

  const toggleMission = () => {
    setShowMission(!showMission);
  };

  const handleRotationIntroduction = () => {
    setShowIntroduction(!showIntroduction);
  };

  const handleRotationMission = () => {
    setShowMission(!showMission);
  };

  return (
    <div className="max-w-[1300px] w-full flex items-center justify-center tracking-wide">
      <div className="w-full h-auto p-2 flex flex-col items-center justify-center">
        <div className="max-w-[1700px] w-full flex items-center justify-center tracking-wide mb-20">
          <div className="w-full h-auto flex flex-col items-center justify-center">
            <Reveal>
              <div
                className="bg-white p-2 m-2 rounded-lg h-auto mx-auto"
                id="introduction"
              >
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
                      <Reveal>
                        <div className="w-full p-1 md:p-2">
                          <div className="border-t-1 md:border-t-2 border-cvic-red/50" />
                          <div className="w-full flex flex-col md:grid grid-cols-3">
                            <div className="div-2 md:p-4 col-span-2 flex flex-col items-center justify-center">
                              <h1 className="font-bold text-cvic-red text-base md:text-lg tracking-widest p-1 md:p-2">
                                {localeData.CVIC_DESCRIPTION.TITLE}
                              </h1>
                              {localeData.CVIC_DESCRIPTION.CONTENT}
                            </div>
                            <Link
                              href={"/pages/equipments"}
                              className="w-full flex-col flex items-center justify-center p-2"
                            >
                              <div className="text-xs p-2 text-blue-500">
                                <div className="bg-equipments w-[300px] h-[150px] md:w-[400px] md:h-[230px] bg-center bg-cover rounded-lg shadow-lg hover:scale-105 duration-500 cursor-pointer col-span-1" />
                                {
                                  localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN
                                    .TITLE
                                }
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="w-full p-1 md:p-2">
                          <div className="border-t-1 md:border-t-2 border-cvic-red/50" />
                          <div className="w-full flex flex-col-reverse md:grid grid-cols-3">
                            <div className=" col-span-2">
                              <h1 className="font-bold text-cvic-red text-base md:text-lg tracking-widest p-1 md:p-2">
                                {localeData.EARLY_DETECTION.TITLE}
                              </h1>
                              <p className="p-2 md:p-4">
                                {localeData.EARLY_DETECTION.CONTENT}
                              </p>
                              <p className="p-2 md:p-4">
                                {localeData.ADVANCED_IMAGING.CONTENT}
                              </p>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center p-1 md:p-2">
                              <div className="bg-pointing w-[300px] h-[150px] md:w-[400px] md:h-[230px] bg-center bg-cover rounded-lg shadow-lg hover:scale-105 duration-500 cursor-pointer col-span-1" />
                            </div>
                          </div>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="w-full p-1 md:p-2">
                          <div className="border-t-1 md:border-t-2 border-cvic-red/50" />
                          <div className="w-full flex flex-col md:grid grid-cols-3">
                            <div className="div-2 md:p-4 col-span-2 flex flex-col items-center justify-center">
                              <h1 className="font-bold text-cvic-red text-base md:text-lg tracking-widest p-1 md:p-2">
                                {localeData.ADDRESSING_NEEDS.TITLE}
                              </h1>
                              {localeData.ADDRESSING_NEEDS.CONTENT}
                            </div>
                            <Link
                              href={"/pages/reservation"}
                              className="w-full h-full flex flex-col items-center justify-center p-1 md:p-2"
                            >
                              <div className="bg-staff w-[300px] h-[150px] md:w-[400px] md:h-[230px] bg-center bg-cover rounded-lg shadow-lg hover:scale-105 duration-500 cursor-pointer col-span-1" />
                              <div className="text-xs p-2 text-blue-500">
                                {localeData.RESERVATION.TITLE}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="w-full p-1 md:p-2">
                          <div className="border-t-1 md:border-t-2 border-cvic-red/50" />
                          <div className="w-full flex flex-col-reverse md:grid grid-cols-3">
                            <div className="col-span-2 flex flex-col items-center justify-center">
                              <h1 className="font-bold text-cvic-red text-base md:text-lg tracking-widest p-1 md:p-2">
                                {localeData.CONTINUOUS_IMPROVEMENT.TITLE}
                              </h1>
                              <p className="p-2 md:p-4 md:pb-0 font-bold">
                                {localeData.CONTINUOUS_IMPROVEMENT.CONTENT}
                              </p>
                              <p className="p-2 md:p-4">
                                {localeData.CVIC_DOCK.CONTENT}
                              </p>
                            </div>
                            <div className="w-full flex items-center justify-center">
                              <div className="bg-case w-[300px] h-[250px] bg-center bg-cover rounded-lg shadow-lg hover:scale-105 duration-500 cursor-pointer col-span-1" />
                            </div>
                          </div>
                        </div>
                      </Reveal>
                      <div className="border-t-1 md:border-t-2 border-cvic-red/50" />
                      <Reveal>
                        <p className="text-[10px] md+text-sm">
                          {localeData.NEW_CVIC_GROUP.CONTENT}
                        </p>
                      </Reveal>
                    </div>
                  </Reveal>
                )}
              </div>
            </Reveal>
          </div>
        </div>
        <QualitySection />
        <Reveal>
          <div
            id="mission"
            className="bg-white p-2 m-2 rounded-lg h-auto mx-auto"
          >
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
            <div className="w-full">
              <div className="col-span-2">
                {showMission && (
                  <Reveal>
                    <div className="w-full h-[150px] md:h-[300px] lg:h-[500px] bg-terashima_message bg-cover bg-center" />
                  </Reveal>
                )}
                {showMission && (
                  <Reveal>
                    <div className="p-4">
                      <p className="font-bold p-2 md:p-4">
                        {localeData.CVIC_INFO.CLINIC_MISSION}
                      </p>
                      <p className="p-2 md:p-4 text-xs md:text-sm">
                        &quot; {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P1}
                      </p>
                      <p className="p-2 md:p-4 text-xs md:text-sm">
                        {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P2}
                      </p>
                      <p className="p-2 md:p-4 text-xs md:text-sm">
                        {localeData.CVIC_INFO.TERASHIMA_MESSAGE_P3} &quot;
                      </p>
                      <p className="p-2 pb-0 md:p-4 md:pb-0 font-bold">
                        {localeData.DOCTORS.TERASHIMA}
                      </p>
                      <p className="md:px-20">
                        {localeData.DOCTORS.TERASHIMA_TITLE}
                      </p>
                    </div>
                  </Reveal>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ClinicInfo;
