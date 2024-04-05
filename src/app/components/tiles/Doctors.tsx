import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import Reveal from "@/app/Reveal";

const Doctors: React.FC<DoctorsProps> = () => {
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
    <div className="tile-container" id="Doctors" ref={containerRef}>
      <div className="tile-photo-container">
        <div
          style={{
            transform: zoomOut ? "scale(2)" : "scale(2.5)", // Zoom-out effect
            transition: "transform 2s ease-in-out", // Transition effect for scaling
          }}
          className="w-full h-[180px] md:h-[50vh] lg:h-[60vh] bg-doctors bg-cover bg-center"
        ></div>
        <div className="tile-info-container">
          <div
            className="w-[150px] md:w-auto h-auto flex flex-wrap flex-col items-center md:items-start justify-center"
            style={{
              transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
              transition: "transform 1s ease-in-out", // Transition effect for scaling
            }}
          >
            <Reveal>
              <p className="md:my-2 text-white text-[10px] md:text-base lg:text-3xl font-bold h-[30px]">
                {localeData.BASIC.DOCTORS}
              </p>
            </Reveal>
            <Reveal>
              <p className="md:my-2 text-white text-[4px] md:text-[9px] lg:text-sm h-[20px]">
                {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
              </p>
            </Reveal>
            <Reveal>
              <BiRightArrowAlt className="tile-arrow" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
