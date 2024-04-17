import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { MotionConfig, motion } from "framer-motion";

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
      return i === index ? (rotation === 180 ? 0 : 180) : 0;
    });
    setRotations(newRotations);
  };

  return (
    <MotionConfig transition={transition}>
      <div className="w-full max-w-[1700px]">
        {localeData.EQUIPMENTS.map((equipment, index) => (
          <motion.div
            key={index}
            variants={focused}
            animate={focus === index ? "open" : "closed"}
            onClick={() => handleFocus(index)}
            className="relative w-full bg-white rounded-lg p-1 md:p-2 mb-4 md:mb-30 cursor-pointer"
          >
            <div className={`absolute z-10 ${index % 2 === 0 ? "left-0" : "right-0"} bottom-0 text-2xl md:text-[70px] text-${focus === index ? "black" : "white"} font-extrabold p-2 md:p-4`}>
              <RiArrowDownDoubleLine style={{ transform: `rotate(${rotations[index]}deg)` }} />
            </div>
            <div className={`relative bg-${equipment.IMG} bg-cover bg-center h-[140px] md:h-[500px] w-full flex flex-col items-${index % 2 === 0 ? "end" : "start"} justify-end`}>
              <p className="text-base md:text-[50px] text-white font-extrabold p-2 md:p-4">
                {equipment.TITLE}
              </p>
              <p className="p-2 md:p-4 font-extrabold text-white text-[9px] md:text-base">
                {equipment.D1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionConfig>
  );
};

export default EquipmentInfo;
