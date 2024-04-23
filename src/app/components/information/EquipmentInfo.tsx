import React, { useState } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { MotionConfig, motion } from "framer-motion";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "../Reveal";

const EquipmentInfo: React.FC<EquipmentInfoProps> = ({ locale }) => {
  const localeData = getLocaleData(locale);
  const [focus, setFocus] = useState<number | null>(null);
  const [rotations, setRotations] = useState<number[]>([0, 0, 0, 0]);

  const transition = { type: "ease", ease: "easeInOut", duration: 0.5 };
  const focused = {
    open: { height: "1000px" },
    closed: { height: "auto" },
  };

  const handleFocus = (index: number) => {
    const newFocus = focus === index ? null : index;
    setFocus(newFocus);
    const newRotations = rotations.map((rotation, i) => {
      return i === index - 1 ? (rotation === 180 ? 0 : 180) : 0; // Adjust index here
    });
    setRotations(newRotations);
  };

  return (
    <MotionConfig transition={transition}>
      <div className="w-full max-w-[1700px]">
        {/* Equipment 1 */}
        <motion.div
          key={1}
          variants={focused}
          animate={focus === 1 ? "open" : "closed"}
          onClick={() => handleFocus(1)}
          className="relative w-full bg-white rounded-lg p-1 md:p-2 mb-4 md:mb-30 cursor-pointer"
        >
          <div
            className={`absolute z-10 left-0 bottom-0 text-2xl md:text-[70px] text-${focus === 1 ? "black" : "white"} font-extrabold p-2 md:p-4`}
          >
            <RiArrowDownDoubleLine
              style={{ transform: `rotate(${rotations[0]}deg)` }}
            />{" "}
            {/* Adjust index here */}
          </div>
          <div className="relative bg-equipments bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
            <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
              Vantage Titan
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              Toshiba 1.5 Tesla MRI
            </p>
          </div>
          <Reveal>
            <div className={`${focus === 1 ? "flex flex-col" : "hidden"}`}>
              <h2 className="text-xl font-bold mb-4">
                {localeData.HEART_MRI_SCAN.TITLE}
              </h2>
              {localeData.HEART_MRI_SCAN.DESCRIPTION.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </motion.div>

        {/* Equipment 2 */}
        <motion.div
          key={2}
          variants={focused}
          animate={focus === 2 ? "open" : "closed"}
          onClick={() => handleFocus(2)}
          className="relative w-full bg-white rounded-lg p-1 md:p-2 mb-4 md:mb-30 cursor-pointer"
        >
          <div
            className={`absolute z-10 right-0 bottom-0 text-2xl md:text-[70px] text-${focus === 2 ? "black" : "white"} font-extrabold p-2 md:p-4`}
          >
            <RiArrowDownDoubleLine
              style={{ transform: `rotate(${rotations[1]}deg)` }}
            />{" "}
            {/* Adjust index here */}
          </div>
          <div className="relative bg-achieva bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
            <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
              Achieva DS (Dual Speed)
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              Philips 1.5 Tesla MRI Machine
            </p>
          </div>
        </motion.div>

        {/* Equipment 3 */}
        <motion.div
          key={3}
          variants={focused}
          animate={focus === 3 ? "open" : "closed"}
          onClick={() => handleFocus(3)}
          className="relative w-full bg-white rounded-lg p-1 md:p-2 mb-4 md:mb-30 cursor-pointer"
        >
          <div
            className={`absolute z-10 left-0 bottom-0 text-2xl md:text-[70px] text-${focus === 3 ? "black" : "white"} font-extrabold p-2 md:p-4`}
          >
            <RiArrowDownDoubleLine
              style={{ transform: `rotate(${rotations[2]}deg)` }}
            />{" "}
            {/* Adjust index here */}
          </div>
          <div className="relative bg-incisive bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-end justify-end">
            <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
              Incisive CT
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              Philips CT Scanner
            </p>
          </div>
        </motion.div>

        {/* Equipment 4 */}
        <motion.div
          key={4}
          variants={focused}
          animate={focus === 4 ? "open" : "closed"}
          onClick={() => handleFocus(4)}
          className="relative w-full bg-white rounded-lg p-1 md:p-2 mb-4 md:mb-30 cursor-pointer"
        >
          <div
            className={`absolute z-10 right-0 bottom-0 text-2xl md:text-[70px] text-${focus === 4 ? "black" : "white"} font-extrabold p-2 md:p-4`}
          >
            <RiArrowDownDoubleLine
              style={{ transform: `rotate(${rotations[3]}deg)` }}
            />{" "}
            {/* Adjust index here */}
          </div>
          <div className="relative bg-zio bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-start justify-end">
            <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
              Ziostation2
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              3D Medical Image Processing Workstation
            </p>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default EquipmentInfo;
