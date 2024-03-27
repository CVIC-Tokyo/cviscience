'use client'

import React, { useRef } from "react";
import { useGlobalContext } from "../../context/store";
import { getLocaleData } from "@/utils/helpers";
import GoogleMap from "./GoogleMap";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="tile-container"
      id="Access"
      ref={containerRef}  
    >
      <div className="w-full h-full p-2 flex flex-col items-center justify-center">
        <div className="w-full h-full md:w-[80%] md:h-[60%] bg-white/20 flex items-center justify-center tile-photo-container">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Access;
