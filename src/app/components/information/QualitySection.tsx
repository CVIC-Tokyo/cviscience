"use client";

import React, { useState } from "react";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import ArrowIcon from "../DropdownArrow";
import Reveal from "../Reveal";
import Link from "next/link";
import Contact from "../footercomponents/Contact";
import GoogleMap from "../GoogleMap";

const QualitySection = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const [showQpas, setShowQpas] = useState(true);

  const toggleQpas = () => {
    setShowQpas(!showQpas);
  };

  return (
    <div
      id="why-choose-cvic"
      className="w-full h-auto flex flex-col items-center justify-center max-w-[1700px] mb-20"
    >
      <Reveal>
        <div className="bg-white p-2 m-2 rounded-lg h-auto mx-auto">
          <Reveal>
            <h1
              className="about-title cursor-pointer flex items-center justify-center"
              onClick={toggleQpas}
            >
              <span>{localeData.QPAS.section}</span>
              <ArrowIcon showDropdown={showQpas} handleRotation={toggleQpas} />
            </h1>
          </Reveal>
          {showQpas && (
            <div>
              <div className="flex flex-col">
                <div className="p-1 md:p-2">
                  <h1 className="text-2xl p-2 font-extrabold text-cvic-red">
                    {localeData.QPAS.subtitle}
                  </h1>
                  <h2 className="tracking-wide uppercase font-bold">
                    {localeData.QPAS.text}
                  </h2>
                </div>
                <div className="flex flex-col md:grid grid-cols-4">
                  <div className="bg-qpas bg-center bg-cover w-full h-[700px]" />
                  <div className="col-span-3 snap-y snap-mandatory overflow-y-scroll h-[600px] md:h-[700px] ">
                    <div className="snap-start">
                      {/* //Quality// */}
                      <div className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2" />
                      <h1 className="font-bold tracking-widest text-cvic-red uppercase p-2 md:p-4 text-lg md:text-xl">
                        <span className="text-4xl md:text-5xl font-bold">
                          {localeData.QPAS.content.Quality.subtitle.charAt(0)}
                        </span>
                        {localeData.QPAS.content.Quality.subtitle.slice(1)}
                      </h1>
                      <h2 className="p-2 md:p-4 text-sm md:text-base font-semibold">
                        {localeData.QPAS.content.Quality.text}
                      </h2>
                      <Link
                        href={"/pages/equipments"}
                        className="w-full shadow-lg"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:p-4 hover:scale-95 duration-500">
                          <div className="bg-equipments bg-cover bg-center h-[100px] md:h-[200px] w-full" />
                          <div className="bg-achieva bg-cover bg-center h-[100px] md:h-[200px] w-full" />
                          <div className="bg-incisive bg-cover bg-center h-[100px] md:h-[200px] w-full" />
                          <div className="bg-zio bg-cover bg-center h-[100px] md:h-[200px] w-full" />
                        </div>
                      </Link>
                      <div>
                        <h3 className="text-xs md:text-sm p-2 md:p-4">
                          {localeData.QPAS.content.Quality.listItems.join(", ")}
                        </h3>
                      </div>
                    </div>
                    {/* //Performance// */}
                    <div className="snap-start">
                      <div className="max-w-5xl mx-auto">
                        <div className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2" />
                        <h1 className="font-bold tracking-widest text-cvic-red uppercase p-2 md:p-4 text-lg md:text-xl">
                          <span className="text-4xl md:text-5xl font-bold">
                            {localeData.QPAS.content.Performance.subtitle.charAt(
                              0,
                            )}
                          </span>
                          {localeData.QPAS.content.Performance.subtitle.slice(
                            1,
                          )}
                        </h1>
                        <h2 className="p-2 md:p-4 text-sm md:text-base font-semibold">
                          {localeData.QPAS.content.Performance.text}
                        </h2>
                        <div className="p-2 md:p-4">
                          <div className="flex items-center justify-center">
                            <div className="bg-patients h-[80px] md:h-[180px] w-[230px] md:w-[55%] bg-center bg-cover" />
                          </div>
                          <p className="font-bold text-xs md:text-sm p-2 md:p-4">
                            {localeData.QPAS.content.Performance.content[0]}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                            <div className="bg-numbers bg-center bg-cover h-[145px] md:h-[190px]" />
                            <div className="col-span-2">
                              <p className="p-2 md:p-4 text-xs md:text-sm">
                                {localeData.QPAS.content.Performance.content[1]}
                              </p>
                              <p className="p-2 md:p-4 text-xs md:text-sm">
                                {localeData.QPAS.content.Performance.content[2]}
                              </p>
                            </div>
                          </div>
                          <div className="p-2 md:p-4">
                            <p className="p-2 md:p-4 text-[10px] md:text-xs">
                              {localeData.QPAS.content.Performance.content[3]}
                            </p>
                            <p className="p-2 md:p-4 text-[10px] md:text-xs">
                              {localeData.QPAS.content.Performance.content[4]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* //Accessibility// */}
                    <div className="max-w-5xl mx-auto">
                      <div className="snap-start">
                        <div className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2" />
                        <h1 className="font-bold tracking-widest text-cvic-red uppercase p-2 md:p-4 text-lg md:text-xl">
                          <span className="text-4xl md:text-5xl font-bold">
                            {localeData.QPAS.content.Access.subtitle.charAt(0)}
                          </span>
                          {localeData.QPAS.content.Access.subtitle.slice(1)}
                        </h1>
                        <h2 className="p-2 md:p-4 text-sm md:text-base font-semibold">
                          {localeData.QPAS.content.Access.text}
                        </h2>
                        <div className="w-full h-[150px] md:h-[200px] flex items-center justify-center">
                          <GoogleMap />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
                          <p className="text-xs md:text-sm font-normal col-span-1">
                            {localeData.QPAS.content.Access.content[0]}
                          </p>
                          <p className="text-xs md:text-sm font-normal col-span-1">
                            {localeData.QPAS.content.Access.content[1]}
                          </p>
                          <p className="text-xs md:text-sm font-bold col-span-1">
                            {localeData.QPAS.content.Access.content[2]}
                          </p>
                          <p className="text-xs md:text-sm font-normal col-span-1">
                            {localeData.QPAS.content.Access.content[3]}
                          </p>
                        </div>
                        <Contact />
                      </div>
                    </div>

                    {/* //Skills// */}
                    <div className="snap-start max-w-5xl mx-auto">
                      <div className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2" />
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold tracking-widest text-cvic-red uppercase p-2 md:p-4 text-lg md:text-xl">
                          <span className="text-4xl md:text-5xl font-bold">
                            {localeData.QPAS.content.Skill.subtitle.charAt(0)}
                          </span>
                          {localeData.QPAS.content.Skill.subtitle.slice(1)}
                        </h1>
                        <h2 className="p-2 md:p-4 text-sm md:text-base font-semibold">
                          {localeData.QPAS.content.Skill.text}
                        </h2>
                        <div className="flex justify-center items-center bg-software bg-cover rounded-lg h-[150px] w-[90%] md:w-[330px] mb-4 md:mb-6"></div>
                        <p className="p-2 md:p-4 text-xs md:text-sm font-semibold">
                          {localeData.QPAS.content.Skill.content[0]}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-4">
                          <div className="bg-zio bg-center bg-cover rounded-lg h-[150px] md:h-[200px]" />
                          <div className="col-span-2 flex flex-col justify-between">
                            <p className="text-[10px] md:text-sm p-2">
                              {localeData.QPAS.content.Skill.content[1]}
                            </p>
                            <p className="text-[10px] md:text-sm p-2">
                              {localeData.QPAS.content.Skill.content[2]}
                            </p>
                            <p className="text-[10px] md:text-sm p-2">
                              {localeData.QPAS.content.Skill.content[3]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* //Speed// */}
                    <div className="snap-start border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2" />
                    <div className="">
                      <h1 className="font-bold tracking-widest text-cvic-red uppercase p-2 md:p-4 text-lg md:text-xl">
                        <span className="text-4xl md:text-5xl font-bold">
                          {localeData.QPAS.content.Speed.subtitle.charAt(0)}
                        </span>
                        {localeData.QPAS.content.Speed.subtitle.slice(1)}
                      </h1>
                      <h2 className="p-1 md:p-2 text-sm md:text-base font-semibold">
                        {localeData.QPAS.content.Speed.text}
                      </h2>
                      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
                        <div className="bg-blue-200 rounded-lg shadow-md p-4 md:p-6">
                          <h2 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-4">
                            {localeData.SERVICES.PROCESS.CT_TITLE}
                          </h2>
                          <ul className="text-sm md:text-base text-gray-800">
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.CT_BULLET[1]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.CT_BULLET[2]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.CT_BULLET[3]}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-200 rounded-lg shadow-md p-4 md:p-6">
                          <h2 className="text-lg md:text-xl font-bold text-green-800 mb-2 md:mb-4">
                            {localeData.SERVICES.PROCESS.MRI_TITLE}
                          </h2>
                          <ul className="text-sm md:text-base text-gray-800">
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.MRI_BULLET[1]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.MRI_BULLET[2]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.MRI_BULLET[3]}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:col-span-2 bg-yellow-200 rounded-lg shadow-md p-4 md:p-6">
                          <h2 className="text-lg md:text-xl font-bold text-yellow-800 mb-2 md:mb-4">
                            {localeData.SERVICES.PROCESS.POINT}
                          </h2>
                          <ul className="text-sm md:text-base text-gray-800">
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_CT[1]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_CT[2]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_CT[3]}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:col-span-2 bg-red-200 rounded-lg shadow-md p-4 md:p-6">
                          <h2 className="text-lg md:text-xl font-bold text-red-800 mb-2 md:mb-4">
                            {localeData.SERVICES.PROCESS.POINT_MRI[1]}
                          </h2>
                          <ul className="text-sm md:text-base text-gray-800">
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_MRI[2]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_MRI[3]}
                              </span>
                            </li>
                            <li>
                              <span className="font-semibold">
                                {localeData.SERVICES.PROCESS.POINT_MRI[4]}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default QualitySection;
