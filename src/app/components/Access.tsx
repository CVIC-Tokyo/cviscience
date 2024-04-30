"use client";

import React, { useRef, useState } from "react";
import { useGlobalContext } from "../../context/store";
import { getLocaleData } from "@/utils/helpers";
import GoogleMap from "./GoogleMap";
import { MdPinDrop } from "react-icons/md";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 400);
  };

  return (
    <div
      className="tile-container h-[90vh] md:h-[80vh]"
      id="Access"
      ref={containerRef}
    >
      <div
        onMouseEnter={() => handleHover()}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <Reveal>
          <div className="h-[150px] w-full text-[50px] flex items-center justify-center">
            <div className="font-bold tracking-wide uppercase text-white text-lg md:text-[45px]">
              <motion.div animate={{ y: isHovered ? -20 : 0 }}>
                <MdPinDrop className="w-full h-[55px]" />
              </motion.div>
              {localeData.ACCESS.ACCESS_TITLE}
            </div>
          </div>
        </Reveal>
        <div className="w-full h-full md:w-[90%] md:h-[65%] bg-gradient-to-b from-blue-300 to-blue-200 flex items-center justify-center tile-photo-container mb-4 md:mb-8">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Access;
