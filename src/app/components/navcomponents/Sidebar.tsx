import Image from "next/image";
import Link from "next/link";
import React from "react";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import {
  AiFillCalendar,
  AiFillPushpin,
  AiOutlineMail,
} from "react-icons/ai";
import { getLocaleData } from "@/utils/helpers";
import TranslationTab from "./TranslationTab";
import { motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";

const SideBar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  handleSidebar,
  locale,
}) => {
  const localeData = getLocaleData(locale);

  return (
    <div
      className={
        showSidebar
          ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70"
          : ""
      }
    >
      <div
        className={
          showSidebar
            ? "fixed left-0 top-0 w-full h-auto p-5 ease-in duration-500 bg-white"
            : "fixed left-[-120%] top-0 p-10 ease-in-out duration-500 bg-white"
        }
      >
        <div className="">
          {/* LOGO AND CLOSE BUTTON */}
          <div className="flex w-full h-[100px] items-center justify-between">
            <Link className="scroll-false" onClick={handleSidebar} href="/">
              <Image src={cvic_logo_600} height="35" alt="/logo" />
            </Link>
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleSidebar()}
          className="w-14 h-14 md:hidden curser-pointer p-1"
        >
          <HamburgerButton showSidebar={showSidebar}/>
        </motion.div>
          </div>
          {/* SIDE BAR BUTTONS */}
          <div className="py-4 flex flex-col w-full">
            <ul className="uppercase grid grid-cols-2 w-full">
              <Link
                onClick={() => setShowSidebar(false)}
                href="/pages/services"
                className="sidebar-button"
              >
                <li className="py-4 text-sm">{localeData.BASIC.SERVICES}</li>
              </Link>
              <Link
                onClick={() => setShowSidebar(false)}
                href="/pages/equipments"
                className="sidebar-button"
              >
                <li className="py-4 text-sm">{localeData.BASIC.EQUIPMENTS}</li>
              </Link>
              <Link
                onClick={() => setShowSidebar(false)}
                href="/pages/doctors"
                className="sidebar-button"
              >
                <li className="py-4 text-sm">{localeData.BASIC.DOCTORS}</li>
              </Link>
              <Link
                onClick={() => setShowSidebar(false)}
                href="/#Access"
                className="sidebar-button"
              >
                <li className="py-4 text-sm">{localeData.BASIC.ACCESS}</li>
              </Link>
              <Link
                onClick={() => setShowSidebar(false)}
                href="/"
                className="sidebar-button"
              >
                <li className="py-4 text-sm">More</li>
              </Link>
            </ul>
            <div className="w-full flex items-center justify-start my-2">
              <TranslationTab />
            </div>
            <div className="pt-10">
              <p className="uppercase">{localeData.CONTACT.GET_IN_TOUCH}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiFillPushpin />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiFillCalendar />
                </div>
                <Link
                  href="/#contact"
                  className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  onClick={() => setShowSidebar(false)}
                >
                  <AiOutlineMail />
                </Link>
              </div>
            </div>
            <div className="border-b border-grey-300 my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
