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
    open: { height: "70vh" },
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
              {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.TITLE}
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              {localeData.FACILITIES.TITLES.MRI.VINTAGE_TITAN.MAKER}
            </p>
          </div>
          <Reveal>
            <div
              className={`${focus === 1 ? "flex flex-col h-[50vh] md:h-[350px] overflow-y-scroll" : "hidden"}`}
            >
              <h2 className="text-sm md:text-base lg:text-lg font-bold mb-4 p-2 md:p-4 text-cvic-red">
                {localeData.HEART_MRI_SCAN.TITLE}
              </h2>
              {localeData.HEART_MRI_SCAN.DESCRIPTION.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-xs md:text-base lg:text-lg px-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </motion.div>

        {/* Equipment 2 */}

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
              {localeData.FACILITIES.TITLES.CT.INCISIVE.TITLE}
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              {localeData.FACILITIES.TITLES.CT.INCISIVE.MAKER}
            </p>
          </div>
          <Reveal>
            <div
              className={`${focus === 3 ? "flex flex-col h-[50vh] md:h-[350px] overflow-y-scroll" : "hidden"}`}
            >
              <h2 className="text-sm md:text-base lg:text-lg font-bold mb-4 p-2 md:p-4 text-cvic-red">
                {localeData.EQUIPMENTS[2].TITLE}
              </h2>
                <p
                  className="mb-4 text-xs md:text-base lg:text-lg px-4"
                >
                  {localeData.EQUIPMENTS[2].D2}
                </p>
            </div>
          </Reveal>
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
              {localeData.FACILITIES.TITLES.ZIO.TITLE}
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              {localeData.FACILITIES.TITLES.ZIO.MAKER}
            </p>
          </div>
          <Reveal>
            <div
              className={`${focus === 4 ? "flex flex-col h-[50vh] md:h-[350px] overflow-y-scroll" : "hidden"}`}
            >
              <h2 className="text-sm md:text-base lg:text-lg font-bold mb-4 p-2 md:p-4 text-cvic-red">
                {localeData.FACILITIES.TITLES.ZIO.TITLE}
              </h2>
                <p
                  className="mb-4 text-xs md:text-base lg:text-lg px-4"
                >
                  {localeData.FACILITIES.DESCRIPTIONS.ZIO.D1}
                </p>
            </div>
          </Reveal>
        </motion.div>

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
              {localeData.FACILITIES.TITLES.MRI.ACHIEVA.TITLE}
            </p>
            <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
              {localeData.FACILITIES.TITLES.MRI.ACHIEVA.MAKER}
            </p>
          </div>
          <Reveal>
            <div
              className={`${focus === 2 ? "flex flex-col h-[50vh] md:h-[350px] overflow-y-scroll" : "hidden"}`}
            >
              <h2 className="text-sm md:text-base lg:text-lg font-bold mb-4 p-2 md:p-4 text-cvic-red">
                {localeData.HEART_MRI_SCAN.TITLE}
              </h2>
              {localeData.HEART_MRI_SCAN.DESCRIPTION.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-xs md:text-base lg:text-lg px-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default EquipmentInfo;
