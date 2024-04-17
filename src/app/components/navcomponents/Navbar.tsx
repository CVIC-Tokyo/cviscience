"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TranslationTab from "./TranslationTab";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "../../../context/store";
import { motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";

const Navbar: React.FC<NavbarProps> = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const { locale } = useGlobalContext();
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

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`w-auto fixed top-0 left-0 right-0 z-[100] ${showShadow ? `shadow-2xl bg-white/35` : "bg-white/0"}`}
    >
      {/* NAVBAR LOGO AND TOGGLE */}
      <div className="relative max-w-[1240px] mx-auto flex md:justify-between items-center p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleSidebar()}
          className="absolute z-100 top-0 left-0 w-14 h-14 md:hidden curser-pointer p-1"
        >
          <HamburgerButton 
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          handleSidebar={handleSidebar}
          locale={locale} />
        </motion.div>
        <Link href={"/"}>
          <div className="w-[280px] h-[39px] md:w-[600px] md:h-[75px] bg-logo_600 bg-contain ml-12"></div>
        </Link>
        <div className="hidden md:flex h-[10xpx]">
          <TranslationTab />
        </div>
      </div>
      {/* NAVBAR BUTTONS */}
      <div className="max-w-[1240px] mx-auto hidden md:flex items-center pt-2">
        <div className="w-full p-1 grid grid-cols-6">
          <Link href="/" className="navbar-button">
            {localeData.BASIC.HOME}
          </Link>
          <Link href="/pages/services" className="navbar-button">
            {localeData.BASIC.SERVICES}
          </Link>
          <Link href="/pages/equipments" className="navbar-button">
            {localeData.BASIC.EQUIPMENTS}
          </Link>
          <Link href="/pages/doctors" className="navbar-button">
            {localeData.BASIC.DOCTORS}
          </Link>
          <Link href="/#Access" className="navbar-button">
            {localeData.BASIC.ACCESS}
          </Link>
          <Link href="/" className="navbar-button border-r-0">
            {localeData.BASIC.MORE}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
