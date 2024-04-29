'use client'

import React, { useState } from "react";
import { useGlobalContext } from "@/context/store";
import { getLocaleData } from "@/utils/helpers";
import ArrowIcon from "../DropdownArrow";
import Reveal from "../Reveal";

const QualitySection = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const [showQpas, setShowQpas] = useState(false);

  const toggleQpas = () => {
    setShowQpas(!showQpas);
  };

  return (
    <div className="w-full h-auto p-2 flex flex-col items-center justify-center max-w-[1700px]">
      <Reveal>
        <div className="bg-white p-2 m-2 rounded-lg h-auto mx-auto">
          <Reveal>
            <h1
              className="about-title cursor-pointer flex items-center justify-between"
              onClick={toggleQpas}
            >
              <span>{localeData.QPAS[0].section}</span>
              <ArrowIcon showDropdown={showQpas} handleRotation={toggleQpas} />
            </h1>
          </Reveal>
          {showQpas && (
            <Reveal>
              <div className="p-4 text-[12px] md:text-base">
                {localeData.QPAS[0].content.map((item, idx) => (
                  <div key={idx} className="content-item mb-6">
                    <h3 className="subtitle text-lg font-bold mb-2 text-teal-500">{item.subtitle}</h3>
                    <p className="text mb-2">{item.text}</p>
                    {item.listItems && (
                      <ul className="list ml-4">
                        {item.listItems.map((listItem, i) => (
                          <li key={i} className="list-item text-sm mb-1">{listItem}</li>
                        ))}
                      </ul>
                    )}
                    {item.content && (
                      <div className="sub-content ml-4">
                        {item.content.map((subItem, i) => (
                          <p key={i} className="sub-text text-sm mb-2">{subItem}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default QualitySection;
