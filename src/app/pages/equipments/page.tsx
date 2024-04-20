"use client";

import React from "react";
import "../../../styles/globals.css";
import EquipmentInfo from "@/app/components/information/EquipmentInfo";
import { useGlobalContext } from "@/context/store";

const EquipmentsPage: React.FC<EquipmentsPageProps> = () => {
  const { locale } = useGlobalContext();

  return (
    <div className="w-full h-full">
      <div className="page-container">
        <div className="w-full h-full">
          <EquipmentInfo locale={locale} />
        </div>
      </div>
    </div>
  );
};

export default EquipmentsPage;
