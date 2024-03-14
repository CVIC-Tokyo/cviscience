import React from "react";
import cvic_logo_box_red from "../../../public/logos/cvic-logo-box-red.png"
import Image from "next/image";

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-[#820000] text-white w-full h-auto p-3 flex flex-col justify-center items-center align-bottom">
      <div className="flex flex-col justify-center items-center">
        <Image src={cvic_logo_box_red} width={100} height={100} alt="/CVIC logo" />
        {}
      </div>
    </div>
  )
}