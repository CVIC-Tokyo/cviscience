import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";

const Access: React.FC<AccessProps> = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="access"
      ref={containerRef}
      className="w-full h-[350px] md:h-[40vh] lg:h-[70vh] border-t-8 flex items-center justify-center bg-bottom border-black bg-fixed bg-parallax bg-cover"
    ></div>
  );
};

export default Access;
