import { getLocaleData } from "@/utils/helpers";
import React from "react";
import { useGlobalContext } from "../../context/store";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";

const Contact: React.FC<ContactProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="grid md:grid-cols-2 w-auto">
        <div className="col-span-1 flex items-center justify-center p-2 text:xs md:text-xl text-black">
          <div className="w-full h-full tracking-wide bg-white hover:bg-white/75 font-bold p-2 flex flex-col items-center cursor-pointer">
            <p>
              {localeData.REACH.NUMBER}
            </p>
            <p>
              ({localeData.REACH.HOURS})
            </p>
            <PiPhoneCallFill />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center p-2 text:xs md:text-xl text-black">
        <div className="w-full h-full tracking-wide bg-white hover:bg-white/75 font-bold p-4 flex flex-col items-center cursor-pointer">
            {localeData.REACH.APPLY_ONLINE}
            <IoMailSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
