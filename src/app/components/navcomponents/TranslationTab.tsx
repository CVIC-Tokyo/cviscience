import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "@/app/Context/store";

const TranslationTab: React.FC<TranslationTabProps> = ({ handleLanguage }) => {
  const { locale } = useGlobalContext();

  return (
    <div className="hidden md:flex h-full w-[200px]">
      <div
        className="ml-5 text-3xl flex justify-center items-center w-full h-full cursor-pointer"
        onClick={() => handleLanguage()}
      >
        <div className="flex uppercase">
          {locale}
          <FaLanguage />
          {locale === "ja" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
      </div>
    </div>
  );
};

export default TranslationTab;
