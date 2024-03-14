import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";

const TranslationTab: React.FC<TranslationTabProps> = ({
  language,
  setLanguage,
  handleLanguage,
}) => {
  return (
    <div className="hidden md:flex h-full w-[200px]">
      <div
        className="ml-5 text-3xl flex justify-center items-center w-full h-full cursor-pointer"
        onClick={() => handleLanguage()}
      >
        <FaLanguage />
        <div className="flex uppercase">
          {language}
          {language === "ja" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
      </div>
    </div>
  );
};

export default TranslationTab;
