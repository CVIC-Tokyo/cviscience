import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext, useSmallScreen } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

const About: React.FC<AboutProps> = () => {
  const aboutImage = "/images/access_image.jpg";
  const boxLogo = "/logos/cvic_logo_box_red.png"
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
      className="w-full h-[450px] md:h-[50vh] lg:h-[90vh] overflow-hidden relative border-y-8 border-black"
    >
      <div className="w-full h-full relative">
        <div
          style={{
            transform: zoomOut ? "scale(2)" : "scale(2.5)", // Zoom-out effect
            transition: "transform 2s ease-in-out", // Transition effect for scaling
          }}
          className="w-full h-[350px] md:h-[40vh] lg:h-[80vh]"
        >
          <Image src={aboutImage} alt="services image" style={{objectFit:"cover"}} fill/>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/25 hover:bg-black/50">
          <div
            className="w-auto h-auto flex flex-col items-center justify-center"
            style={{
              transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
              transition: "transform 1s ease-in-out", // Transition effect for scaling
            }}
          >
            <Image src={boxLogo} alt="cvic-logo-red" width={40} height={40} />
            <p className="md:m-2 text-white text-[13px] md:text-base lg:text-3xl font-bold h-[30px]">
              {localeData.CVIC_INFO.CLINIC_NAME}
            </p>
            <p className="md:m-2 text-white text-[4px] md:text-[9px] lg:text-sm h-[20px]">
              {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
            </p>
            <div className="p-2 h-[8px] w-auto md:h-[20px] lg:h-[30px] rounded bg-white/75 hover:bg-white flex items-center justify-center cursor-pointer">
              <p className="text-[4px] md:text-xs lg:text-xs">
                {localeData.BASIC.ABOUT}
              </p>
              <BiRightArrowAlt className="size-[4px] md:size-[10px] lg:size-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
