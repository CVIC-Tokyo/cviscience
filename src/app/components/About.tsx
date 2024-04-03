import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const About: React.FC<AboutProps> = () => {
  const boxLogo = "/logos/cvic_logo_box_red.png";
  const boxLogoWhite = "/logos/cvic_logo_box.jpg"
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
      ref={containerRef}
      className="h-screen tile-container"
      id="About"
    >
      <div ref={containerRef} className="w-full h-full"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className="w-[150px] md:w-auto h-auto flex flex-wrap flex-col items-center justify-center"
          style={{
            transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
            transition: "transform 1s ease-in-out", // Transition effect for scaling
          }}
        >
          <Image src={boxLogo} alt="cvic-logo-red" width={40} height={40} className="hidden md:flex" />
          <Image src={boxLogoWhite} alt="cvic-logo-red" width={40} height={40} className="flex md:hidden"/>
          <p className="md:m-2 text-white text-[10px] md:text-base lg:text-3xl font-bold h-[50px] flex items-center justify-center">
            {localeData.CVIC_INFO.CLINIC_NAME}
          </p>
          <p className="md:m-2 text-white text-[4px] md:text-[9px] lg:text-sm h-[20px]">
            {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
          </p>
          <Link
            href={"/pages/about"}
            className="p-2 h-[8px] w-auto md:h-[20px] lg:h-[30px] rounded bg-white/75 hover:bg-white flex items-center justify-center cursor-pointer"
          >
            <p className="text-[4px] md:text-xs lg:text-xs">
              {localeData.BASIC.ABOUT}
            </p>
            <BiRightArrowAlt className="size-[4px] md:size-[10px] lg:size-[15px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
