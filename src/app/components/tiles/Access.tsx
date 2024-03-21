import React, { useRef } from "react";
import { useGlobalContext } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";
import GoogleMap from "../GoogleMap";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="Access"
      ref={containerRef}
      className="w-full h-[350px] md:h-[40vh] lg:h-[70vh] flex items-center justify-center bg-bottom bg-fixed bg-parallax bg-cover"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[80%] h-[60%] flex items-center justify-center bg-white rounded-lg shadow-3xl">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Access;
