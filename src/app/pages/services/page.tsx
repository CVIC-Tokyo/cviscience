"use client";

import "../../../styles/globals.css";
import React from "react";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";
import ServicesInfo from "@/app/components/information/ServiceInfo";
import OptionalServicesInfo from "@/app/components/information/OptionalServicesInfo";

const ServicesPage: React.FC<ServicesPageProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="page-container bg-gradient-to-b from-blue-300 to-blue-200 p-4 md:p-8">
      {/* CVIC Dock Section */}
      <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8 mb-4">
        <h2 className="text-sm md:text-base font-semibold text-cvic-red mb-4">
          {localeData.CVIC_DOCK.TITLE}
        </h2>
        <p className="text-[10px] md:text-sm">{localeData.CVIC_DOCK.CONTENT}</p>
      </div>

      {/* New Checkup Menu Section */}
      <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8 mb-4">
        <h2 className="text-sm md:text-base font-semibold text-cvic-red mb-4">
          {localeData.NEW_CHECKUP_MENU.TITLE}
        </h2>
        <p className="text-[10px] md:text-sm">{localeData.NEW_CHECKUP_MENU.CONTENT}</p>
      </div>

      {/* Services Information Section */}
      <div className=" rounded-lg shadow-2xl p-4 md:p-8 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-cvic-red mb-4">
          {localeData.SERVICES.TITLE}
        </h2>
        <ServicesInfo services={localeData.SERVICES.DOCK} />
      </div>

      {/* Optional Services Information Section */}
      <div className="rounded-lg shadow-2xl p-4 md:p-8">
        <OptionalServicesInfo locale={locale} />
      </div>
    </div>
  );
};

export default ServicesPage;
