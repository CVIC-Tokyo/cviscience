import React from "react";
import cvic_logo_600 from "../../../public/logos/cvic_logo_600.png"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import TranslationTab from "./navcomponents/TranslationTab";

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar, handleSidebar, handleLanguage }) => {
  return (
    <div className={
      showSidebar
      ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
      : ""
    }
  >
    <div
      className={
        showSidebar
        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-5 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }
    >

      <div className="flex w-full h-[100px] items-center justify-between">
        <Link className="scroll-false" onClick={handleSidebar} href="/">
          <Image src={cvic_logo_600} height="35" alt="/logo" />
        </Link>
      </div>
      <div
        onClick={handleSidebar}
        className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer"
        >
        <AiOutlineClose />
      </div>
    </div>
    <TranslationTab handleLanguage={handleLanguage} />
  </div>
  )
};

export default Sidebar;