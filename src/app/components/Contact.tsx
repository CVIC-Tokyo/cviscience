import { getLocaleData } from "@/utils/helpers";
import React from "react";
import { useGlobalContext } from "../../context/store";
import { AiFillPhone, AiFillWeiboCircle, AiOutlinePhone } from "react-icons/ai";

const Contact: React.FC<ContactProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  return (
    <div className="w-full h-[30px] md:h-[4vh] hidden md:flex">
      <div className="w-full h-full grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-center p-2 hover:bg-cvic-red/25">
          {localeData.REACH.NUMBER}({localeData.REACH.HOURS})
          <AiFillPhone />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <AiFillWeiboCircle />
        </div>
      </div>
    </div>
  );
};

export default Contact;
