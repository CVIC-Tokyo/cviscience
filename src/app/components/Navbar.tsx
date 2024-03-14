"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import TranslationTab from "./navcomponents/TranslationTab";

const Navbar: React.FC<NavbarProps> = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const handleShadow = () => {
      if (window?.scrollY >= 90) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const handleLanguage = () => {
    if (language === "en") {
      setLanguage("ja");
    } else setLanguage("en");
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] ${showShadow ? `shadow-lg bg-opacity-75` : ""}`}
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2">
        <Link href={"/"} className="scroll-false">
          <Image src={cvic_logo_600} alt="CVIC logo" width={600} unoptimized />
        </Link>
        <TranslationTab
          language={language}
          setLanguage={setLanguage}
          handleLanguage={handleLanguage}
        />
      </div>
    </div>
  );
};

export default Navbar;
