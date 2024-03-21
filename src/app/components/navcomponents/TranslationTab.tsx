import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "@/app/Context/store";

const TranslationTab: React.FC<TranslationTabProps> = ({ handleLanguage }) => {
  const { locale } = useGlobalContext();

  return (
    <div className="w-[150px] p-2 rounded-lg flex justify-center items-center bg-cvic-red text-white bg-white/75">
      <div
        className="text-3xl flex justify-center items-center w-full h-full cursor-pointer"
        onClick={() => handleLanguage()}
      >
        <div className="flex uppercase">
          {locale}
          <FaLanguage className="mx-2" />
          {locale === "ja" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
      </div>
    </div>
  );
};

export default TranslationTab;
