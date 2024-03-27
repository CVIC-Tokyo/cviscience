"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import TranslationTab from "./TranslationTab";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "../../../context/store";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { animate, motion } from "framer-motion";

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
      className={`fixed top-0 left-0 right-0 z-[100] bg-white/75 ${showShadow ? `shadow-2xl` : ""}`}
    >
      {/* NAVBAR LOGO AND TOGGLE */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleSidebar} className="md:hidden curser-pointer"
        >
          <AiOutlineMenu
          onClick={() => animate('.sidebar', {x: 200})}
            className="border-y-2 p-2 bg-cvic-red text-white"
            size={45}
          />
        </motion.div>
        <Link href={"/"} className="scroll-false">
          <Image src={cvic_logo_600} alt="CVIC logo" width={600} unoptimized />
        </Link>
        <div className="hidden md:flex h-full">
          <TranslationTab />
        </div>
      </div>
      {/* NAVBAR BUTTONS */}
      <div className="max-w-[1240px] mx-auto hidden md:flex items-center pt-2">
        <div className="w-full p-1 grid grid-cols-6">
          <Link href="/" className="navbar-button">
            {localeData.BASIC.HOME}
          </Link>
          <Link href="/#Services" className="navbar-button">
            {localeData.BASIC.SERVICES}
          </Link>
          <Link href="/#Equipments" className="navbar-button">
            {localeData.BASIC.EQUIPMENTS}
          </Link>
          <Link href="/#Doctors" className="navbar-button">
            {localeData.BASIC.DOCTORS}
          </Link>
          <Link href="/#Access" className="navbar-button">
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
      />
    </div>
  );
};

export default Navbar;
