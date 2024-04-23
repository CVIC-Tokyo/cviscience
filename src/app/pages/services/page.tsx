"use client";

import "../../../styles/globals.css";
import React from "react";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";

const ServicesPage: React.FC<ServicesPageProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container">
      <div className="bg-white/25 flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">
              {localeData.HEART_MRI_SCAN.TITLE}
            </h2>
            {localeData.HEART_MRI_SCAN.DESCRIPTION.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
