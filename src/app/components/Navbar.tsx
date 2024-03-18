"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import TranslationTab from "./navcomponents/TranslationTab";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "../Context/store";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar: React.FC<NavbarProps> = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const { locale, setLocale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  useEffect(() => {
    const handleShadow = () => {
      if (window?.scrollY >= 45) {
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
    // Delay the execution of the language toggle by 1 second
    setTimeout(() => {
      if (locale === "en") {
        setLocale("ja");
      } else {
        setLocale("en");
      }
    }, 500); // 1000 milliseconds = 1 second
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] bg-white/75 ${showShadow ? `shadow-lg` : ""}`}
    >
      {/* NAVBAR LOGO AND TOGGLE */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2">
      <div onClick={handleSidebar} className="md:hidden curser-pointer">
        <AiOutlineMenu className="border-y-2 border-[#820000] p-2" size={45} />
      </div>
        <Link href={"/"} className="scroll-false">
          <Image src={cvic_logo_600} alt="CVIC logo" width={600} unoptimized />
        </Link>
        <div className="hidden md:flex h-full">
          <TranslationTab handleLanguage={handleLanguage} />
        </div>
      </div>
      {/* NAVBAR BUTTONS */}
      <div className="max-w-[1240px] mx-auto hidden md:flex items-center pt-2">
        <div className="w-full p-1 grid grid-cols-6">
          <Link href="/" className="navbar-button">
            {localeData.BASIC.HOME}
          </Link>
          <Link href="/#services" className="navbar-button">
            {localeData.BASIC.SERVICES}
          </Link>
          <Link href="/#equipments" className="navbar-button">
            {localeData.BASIC.EQUIPMENTS}
          </Link>
          <Link href="/#doctors" className="navbar-button">
            {localeData.BASIC.DOCTORS}
          </Link>
          <Link href="/#access" className="navbar-button">
            {localeData.BASIC.ACCESS}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.MORE}
          </Link>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        handleSidebar={handleSidebar}
        handleLanguage={handleLanguage}
      />
    </div>
  );
};

export default Navbar;
