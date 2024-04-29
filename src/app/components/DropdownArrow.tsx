'use client'

import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const ArrowIcon: React.FC<ArrowIconProps> = ({ showDropdown, handleRotation }) => {
  return (
    <motion.div
      onClick={handleRotation}
      className="dropdown-arrow"
      animate={{ rotate: showDropdown ? 180 : 0 }}
    >
      <MdOutlineKeyboardArrowDown />
    </motion.div>
  );
};

export default ArrowIcon;
