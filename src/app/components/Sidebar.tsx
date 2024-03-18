import Image from "next/image";
import Link from "next/link";
import React from "react";
import cvic_logo_600 from "@/../public/logos/cvic_logo_600.png";
import {
  AiFillCalendar,
  AiFillPushpin,
  AiOutlineClose,
  AiOutlineMail,
} from "react-icons/ai";
import { useGlobalContext } from "../Context/store";
import { getLocaleData } from "@/utils/helpers";
import TranslationTab from "./navcomponents/TranslationTab";

const SideBar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  handleSidebar,
  handleLanguage,
}) => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div
      className={
        showSidebar
          ? "md:hidden fixed left-0 top-0 w-full h-auto bg-black/70"
          : ""
      }
    >
      <div
        className={
          showSidebar
            ? "fixed left-0 top-0 w-full h-auto p-5 ease-in duration-500 bg-white"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="">
          {/* LOGO AND CLOSE BUTTON */}
          <div className="flex w-full h-[100px] items-center justify-between">
            <Link className="scroll-false" onClick={handleSidebar} href="/">
              <Image src={cvic_logo_600} height="35" alt="/logo" />
            </Link>
            <div
              onClick={handleSidebar}
              className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          {/* SIDE BAR BUTTONS */}
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <TranslationTab handleLanguage={handleLanguage}/>
              <Link onClick={() => setShowSidebar(false)} href="/">
                <li className="py-4 text-sm">Services</li>
              </Link>
              <Link onClick={() => setShowSidebar(false)} href="/">
                <li className="py-4 text-sm">Process</li>
              </Link>
              <Link onClick={() => setShowSidebar(false)} href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
              <Link onClick={() => setShowSidebar(false)} href="/">
                <li className="py-4 text-sm">Access</li>
              </Link>
              <Link onClick={() => setShowSidebar(false)} href="/">
                <li className="py-4 text-sm">More</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase">Let&apos;s Connect!</p>
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
