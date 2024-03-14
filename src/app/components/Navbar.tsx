"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import TranslationTab from "./navcomponents/TranslationTab";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "../Context/store";

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
        <Link href={"/"} className="scroll-false">
          <Image src={cvic_logo_600} alt="CVIC logo" width={600} unoptimized />
        </Link>
        <TranslationTab
          handleLanguage={handleLanguage}
        />
      </div>
      {/* NAVBAR BUTTONS */}
      <div className="max-w-[1240px] mx-auto hidden md:flex items-center pt-2">
        <div className="w-full p-1 grid grid-cols-6">
          <Link href="/" className="navbar-button">
            {localeData.BASIC.HOME}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.SERVICES}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.PROCESS}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.CONTACT}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.ACCESS}
          </Link>
          <Link href="/" className="navbar-button">
            {localeData.BASIC.MORE}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
