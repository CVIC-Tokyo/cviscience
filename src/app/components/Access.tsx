"use client";

import React, { useRef } from "react";
import { useGlobalContext } from "../../context/store";
import { getLocaleData } from "@/utils/helpers";
import GoogleMap from "./GoogleMap";
import { MdPinDrop } from "react-icons/md";
import { motion } from "framer-motion";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="tile-container" id="Access" ref={containerRef}>
      <div className="w-full h-full p-2 flex flex-col items-center justify-center">
        <div className="h-[150px] w-[400px] text-[50px] flex items-center justify-center">
          <p className="hello font-bold tracking-wide uppercase text-white">
            <motion.div whileHover={{ y: -20 }}>
              <MdPinDrop className="w-full" />
            </motion.div>
            {localeData.ACCESS.ACCESS_TITLE}
          </p>
        </div>
        <div className="w-full h-full md:w-[80%] md:h-[60%] bg-white/50 hover:bg-white flex items-center justify-center tile-photo-container">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Access;
