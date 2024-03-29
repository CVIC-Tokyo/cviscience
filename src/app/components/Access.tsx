"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGlobalContext } from "../../context/store";
import { getLocaleData } from "@/utils/helpers";
import GoogleMap from "./GoogleMap";
import { MdPinDrop } from "react-icons/md";
import { motion } from "framer-motion";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover= ()  => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 400);
  }

  return (
    <div className="tile-container h-[70vh]" id="Access" ref={containerRef}>
      <div 
        onMouseEnter={() => handleHover()}
        className="w-full h-full p-2 flex flex-col items-center justify-center">
        <div className="h-[150px] w-[400px] text-[50px] flex items-end justify-center">
          <div className="hello font-bold tracking-wide uppercase text-white text-lg md:text-[45px]">
            <motion.div
              animate={{ y: isHovered ? -20 : 0}}
              >
              <MdPinDrop className="w-full h-[55px]" />
            </motion.div>
            {localeData.ACCESS.ACCESS_TITLE}
          </div>
        </div>
        <div className="w-full h-full md:w-[80%] md:h-[60%] bg-white/10 flex items-center justify-center tile-photo-container">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Access;
