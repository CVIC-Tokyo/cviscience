import Image from "next/image";
import Link from "next/link";
import React from "react";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import { getLocaleData } from "@/utils/helpers";
import TranslationTab from "./TranslationTab";
import SNS from "../footercomponents/SNS";
import UserInfo from "./UserInfo";

const SideBar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  handleSidebar,
  locale,
  auth,
}) => {
  const localeData = getLocaleData(locale);

  return (
    <div
      className={
        showSidebar
          ? "fixed left-0 top-0 w-full h-auto p-5 ease-in duration-500 bg-white transform translate-y-0"
          : "fixed z-0 left-0 top-[-120%] p-10 ease-out duration-500 bg-white transform -translate-y-full"
      }
    >
      <div className="">
        {/* LOGO AND CLOSE BUTTON */}
        <div className="flex w-full h-[100px] items-center justify-between mt-10">
          <Link className="scroll-false" onClick={handleSidebar} href="/">
            <Image src={cvic_logo_600} height="35" alt="/logo" />
          </Link>
        </div>
        {/* SIDE BAR BUTTONS */}
        <div className="py-4 flex flex-col w-full">
          <ul className="uppercase grid grid-cols-2 w-full">
            <Link
              onClick={() => setShowSidebar(false)}
              href="/"
              className="sidebar-button"
            >
              <li className="py-4 text-sm">{localeData.BASIC.HOME}</li>
            </Link>
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
              href="/pages/access"
              className="sidebar-button"
            >
              <li className="py-4 text-sm">{localeData.BASIC.ACCESS}</li>
            </Link>
            <Link
              onClick={() => setShowSidebar(false)}
              href="/pages/reservation"
              className="sidebar-button"
            >
              <li className="py-4 text-sm">{localeData.RESERVATION.TITLE}</li>
            </Link>
          </ul>
          <div className="absolute top-0 right-2 flex items-center justify-start my-2">
            <TranslationTab />
          </div>
          <div className="pt-10">
            <p className="uppercase">{localeData.CONTACT.GET_IN_TOUCH}</p>
            <div className="pt-2">
              <SNS />
            </div>
          </div>
          <div className="border-b border-grey-300 my-4"></div>
          <UserInfo auth={auth} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
