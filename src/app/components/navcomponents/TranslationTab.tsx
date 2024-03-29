import React, { useEffect, useRef, useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "@/context/store";
import { Button } from "@nextui-org/react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { animate, motion } from 'framer-motion'

const TranslationTab: React.FC<TranslationTabProps> = () => {
  const { locale, setLocale } = useGlobalContext();
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(180);

  const handleRotation = () => {
    setRotation(rotation + 180);
    animate(".dropdown-arrow", {rotate: rotation});
  }

  const locales = [
    { abbreviation: "ja", nativeName: "日本語" }, // Japanese
    { abbreviation: "en", nativeName: "English" },
    { abbreviation: "zh", nativeName: "中文" }, // Chinese
    { abbreviation: "ko", nativeName: "한국어" }, // Korean
    { abbreviation: "tl", nativeName: "Filipino" }, // Filipino (Tagalog)
    { abbreviation: "es", nativeName: "Español" },
    { abbreviation: "fr", nativeName: "Français" },
    { abbreviation: "de", nativeName: "Deutsch" },
    { abbreviation: "ar", nativeName: "العربية" },
    { abbreviation: "ru", nativeName: "русский" },
    { abbreviation: "pt", nativeName: "Português" },
    { abbreviation: "hi", nativeName: "हिन्दी" }, // Hindi
    { abbreviation: "bn", nativeName: "বাংলা" }, // Bengali
    { abbreviation: "ur", nativeName: "اردو" }, // Urdu
    { abbreviation: "it", nativeName: "Italiano" }, // Italian
    { abbreviation: "nl", nativeName: "Nederlands" },
    { abbreviation: "tr", nativeName: "Türkçe" },
    { abbreviation: "fa", nativeName: "فارسی" }, // Persian (Farsi)
    { abbreviation: "vi", nativeName: "Tiếng Việt" }, // Vietnamese
    { abbreviation: "pl", nativeName: "Polski" },
    { abbreviation: "th", nativeName: "ไทย" } // Thai
  ];

  const handleLanguage = (arg: string) => {
    setTimeout(() => {
      setLocale(arg);
    }, 500)
    setShowDropdown(false);
    handleRotation();
  }
  

  return (
    
    <motion.div
      className="relative"
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        onClick={() => {
          handleRotation();
          setShowDropdown(!showDropdown);
        }}
        className="w-[150px] p-2 rounded-lg flex justify-center items-center bg-cvic-red text-white"
      >
        <div
          className="text-3xl flex justify-center items-center w-full h-full cursor-pointer"
        >
          <div className="flex uppercase">
            {locale}
            <FaLanguage className="mx-2" />
            <TiArrowSortedDown className="dropdown-arrow"/>
          </div>
        </div>
      </motion.div>
      {showDropdown && (
        <motion.div layoutScroll className="absolute top-full left-0 w-[150px] h-[200px] overflow-y-scroll bg-white shadow rounded-b-lg">
          {locales.map((lang) => (
            <div
              key={lang.abbreviation}
              className="w-full text-left py-2 px-4 cursor-pointer shadow-sm"
              onClick={() => handleLanguage(lang.abbreviation)}
            >
              {lang.nativeName}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TranslationTab;
