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
    <div className="page-container">
      <div className="bg-white/25 flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="rounded-lg p-4">
            <ServicesInfo services={localeData.SERVICES.DOCK}/>
          </div>
        </div>
      </div>
      <div className="bg-white/25 flex flex-col items-center justify-center mt-4">
        <div className="w-full">
          <div className="rounded-lg p-4">
            <OptionalServicesInfo locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
