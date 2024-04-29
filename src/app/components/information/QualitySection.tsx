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
  const [showQpas, setShowQpas] = useState(false);

  const toggleQpas = () => {
    setShowQpas(!showQpas);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center max-w-[1700px]">
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
                  <h1 className="text-2xl p-2 font-extrabold text-cvic-red">{localeData.QPAS.subtitle}</h1>
                  <h2 className="tracking-wide uppercase font-bold">{localeData.QPAS.text}</h2>
                </div>
                <div className="flex flex-col md:grid grid-cols-4">
                <div className="bg-qpas bg-center bg-cover w-full h-[700px]"/>
                <div className="col-span-3 snap-y snap-mandatory overflow-y-scroll h-[600px] md:h-[800px] ">
                  <div className="snap-start">
                    {/* //Quality// */}
                    <div  className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2"/>
                    <h1 className="font-bold tracking-widest text-cvic-red uppercase p-1 md:p-2">{localeData.QPAS.content.Quality.subtitle}</h1>
                    <h2 className="p-1 md:p-2 text-sm md:text-base font-semibold">{localeData.QPAS.content.Quality.text}</h2>
                    <Link href={'/pages/equipments'} className="w-full shadow-lg">
                      <div className="grid grid-cols-2 p-2 hover:scale-95 duration-500">
                        <div className="bg-equipments bg-cover bg-center h-[100px] md:h-[200px] w-full"/>
                        <div className="bg-achieva bg-cover bg-center h-[100px] md:h-[200px] w-full"/>
                        <div className="bg-incisive bg-cover bg-center h-[100px] md:h-[200px] w-full"/>
                        <div className="bg-zio bg-cover bg-center h-[100px] md:h-[200px] w-full"/>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-xs md:text-sm p-1 md:p-2">{localeData.QPAS.content.Quality.listItems.join(', ')}</h3>
                    </div>
                  </div>
                  {/* //Performance// */}
                  <div className="snap-start">
                  <div  className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2"/>
                    <h1 className="font-bold tracking-widest text-cvic-red uppercase p-1 md:p-2">{localeData.QPAS.content.Performance.subtitle}</h1>
                    <h2 className="p-1 md:p-2">{localeData.QPAS.content.Performance.text}</h2>
                    <div className="p-1 md:p-2">
                      <div className="flex items-center justify-center">
                        <div className="bg-patients h-[80px] md:h-[180px] w-[230px] md:w-[55%] bg-center bg-cover" />
                      </div>
                      <p className="font-bold text-xs md:text-sm p-1 md:p-2">{localeData.QPAS.content.Performance.content[0]}</p>
                      <div className="flex flex-col md:grid grid-cols-3">
                        <div className="bg-numbers bg-center bg-cover h-[145px] md:h-[190px]" />
                        <div className="col-span-2">
                          <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Performance.content[1]}</p>
                          <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Performance.content[2]}</p>
                        </div>
                      </div>
                      <div className="p-2">
                      <p className="p-1 md:p-2 text-[10px] md:text-xs">{localeData.QPAS.content.Performance.content[3]}</p>
                          <p className="p-1 md:p-2 text-[10px] md:text-xs">{localeData.QPAS.content.Performance.content[4]}</p>
                      </div>
                    </div>
                  </div>
                  {/* //Accessibility// */}
                    <div className="snap-start">
                  <div  className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2"/>
                    <h1 className="font-bold tracking-widest text-cvic-red uppercase p-1 md:p-2">{localeData.QPAS.content.Access.subtitle}</h1>
                    <h2 className="p-1 md:p-2 text-sm md:text-base font-semibold">{localeData.QPAS.content.Access.text}</h2>
                    <div>
                      <div className="w-full h-[100px] md:h-[200px] flex items-center justify-center"><GoogleMap /></div>
                      <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Access.content[0]}</p>
                      <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Access.content[1]}</p>
                      <p className="p-1 md:p-2 text-xs md:text-sm font-bold">{localeData.QPAS.content.Access.content[2]}</p>
                      <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Access.content[3]}</p>
                      <Contact />
                    </div>
                  </div>
                   {/* //Skill// */}
                  <div  className="border-b-1 md:border-b-2 border-cvic-red/50 pb-1 md:pb-2"/>
                    <div className="snap-start">
                      <h1 className="font-bold tracking-widest text-cvic-red uppercase p-1 md:p-2">{localeData.QPAS.content.Skill.subtitle}</h1>
                      <h2 className="p-1 md:p-2 text-sm md:text-base font-semibold">{localeData.QPAS.content.Skill.text}</h2>
                      <div className="flex flex-col md:grid grid-cols-3">
                        <div className="bg-workstation bg-center bg-cover h-[145px] md:h-[390px]" />
                        <div className="col-span-2">
                          <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Skill.content[1]}</p>
                          <p className="p-1 md:p-2 text-xs md:text-sm">{localeData.QPAS.content.Skill.content[2]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {showQpas && (
            <Reveal>
              <div className="p-4 text-[12px] md:text-base">
                {localeData.QPAS[0].content.map((item, idx) => (
                  <div key={idx} className="content-item mb-6">
                    <h3 className="subtitle text-lg font-bold mb-2 text-teal-500">
                      {item.subtitle}
                    </h3>
                    <p className="text mb-2">{item.text}</p>
                    {item.listItems && (
                      <ul className="list ml-4">
                        {item.listItems.map((listItem, i) => (
                          <li key={i} className="list-item text-sm mb-1">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.content && (
                      <div className="sub-content ml-4">
                        {item.content.map((subItem, i) => (
                          <p key={i} className="sub-text text-sm mb-2">
                            {subItem}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          )} */}
        </div>
      </Reveal>
    </div>
  );
};

export default QualitySection;
