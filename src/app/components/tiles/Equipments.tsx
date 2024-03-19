import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";

const Services: React.FC<ServicesProps> = () => {
  const [zoomOut, setZoomOut] = useState(false);
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setZoomOut(true);
          }, 0);
        } else {
          setZoomOut(false); // Zoom out when not on screen
        }
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      id="services"
      ref={containerRef}
      className="w-[screen] md:h-[40vh] lg:h-[80vh] overflow-hidden relative border-y-8 border-black h-[490px]"
    >
      <div
        style={{
          transform: zoomOut ? "scale(2)" : "scale(2.5)", // Zoom-out effect
          transition: "transform 2s ease-in-out", // Transition effect for scaling
        }}
        className="w-full h-[220px] md:h-[30vh] lg:h-[70vh] bg-equipments bg-cover bg-top md:bg-center bg-fixed"
      ></div>
          <div
            className="flex md:hidden h-full w-full absolute top-0 left-0 items-end justify-center bg-black/25 hover:bg-black/50`">
            <div
              className="flex items-center transition-transform duration-500s flex-col p-2 bg-black h-[100px] w-full"
              style={{
                transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
                transition: "transform 1s ease-in-out", // Transition effect for scaling
              }}
            >
              <p className="text-white text-[10px] font-bold h-[30px]">
                {localeData.BASIC.EQUIPMENTS}
              </p>
              <p className="text-white text-[4px] h-[20px] w-[150px]">
                {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
              </p>
              <div className="p-2 h-[8px] w-auto rounded bg-white/75 hover:bg-white flex items-center justify-center cursor-pointer">
                <p className="text-[4px]">
                  {localeData.BASIC.EQUIPMENTS}
                </p>
                <BiRightArrowAlt className="size-[4px]" />
              </div>
            </div>
          </div>
      <div className="hidden md:flex absolute top-0 left-0 w-full h-full items-center justify-center bg-black/25 hover:bg-black/50">
        <div
          className="w-auto h-auto flex flex-col items-start justify-center"
          style={{
            transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
            transition: "transform 1s ease-in-out", // Transition effect for scaling
          }}
        >
          <p className="my-2 text-white text-base lg:text-3xl font-bold h-[30px]">
            {localeData.BASIC.EQUIPMENTS}
          </p>
          <p className="my-2 text-white text-[9px] lg:text-sm h-[20px]">
            {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
          </p>
          <div className="my-2 p-2 w-auto h-[20px] lg:h-[30px] rounded bg-white/75 hover:bg-white flex items-center justify-center cursor-pointer">
            <p className="text-xs lg:text-xs">
              {localeData.BASIC.EQUIPMENTS}
            </p>
            <BiRightArrowAlt className="md:size-[10px] lg:size-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
