'use client'

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
      <div className="bg-white/25 flex flex-col items-center justify-center p-4">
        <div className="w-full">
        <div className="rounded-lg p-4 bg-white">
            <div>
              <p className="font-semibold text-cvic-red text-base md:text">{localeData.CVIC_DOCK.TITLE}</p>
            </div>
            <div>
              <p className="text-[12px] p-1 md:p-2">{localeData.CVIC_DOCK.CONTENT}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/25 flex flex-col items-center justify-center p-4 mb-4">
        <div className="rounded-lg p-4 bg-white">
          <div>
            <p className="font-semibold text-cvic-red">{localeData.NEW_CHECKUP_MENU.TITLE}</p>
          </div>
          <div>
            <p className="text-[12px] p-1 md:p-2">{localeData.NEW_CHECKUP_MENU.CONTENT}</p>
          </div>
        </div>
      </div>
      <div className="bg-white/25 flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="rounded-lg p-4">
            <ServicesInfo services={localeData.SERVICES.DOCK} />
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
