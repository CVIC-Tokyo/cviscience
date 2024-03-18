import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext, useSmallScreen } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";

const About: React.FC<AboutProps> = () => {
  const isSmallScreen = useSmallScreen();
  const aboutImage = "/images/access_image.JPG";
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
      className="w-full max-h-screen overflow-hidden relative border-y-8 border-black">
      <div className="w-full h-full flex justify-end items-end m-auto relative">
        <div
          style={{
            backgroundImage: `url(${aboutImage})`,
            width: "100vw", // Width of the container will be the size of the screen
            height: `${isSmallScreen ? '49vh' : "80vh"}`, // You can adjust the height as needed
            transform: zoomOut ? "scale(2)" : "scale(2.5)", // Zoom-out effect
            transition: "transform 2s ease-in-out", // Transition effect for scaling
            backgroundSize: "cover", // Adjust background size for zoom-out
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // Centers the image within the container
          }}
          className="w-full"
        ></div>
        <div className="absolute top-0 left-0 w-full h-[50vh] md:h-[80vh] flex items-start justify-center bg-black/25 hover:bg-black/60">
          <div
            className="w-[60%] h-full flex flex-col items-center justify-center"
            style={{
              transform: zoomOut ? "scale(2)" : "scale(1.5)", // Zoom-out effect for the overlay
              transition: "transform 1s ease-in-out", // Transition effect for scaling
            }}
          >
            <p className="md:m-2 noto-serif text-white text-[8px] md:text-sm lg:text-base font-bold h-[30px]">
              {localeData.CVIC_INFO.CLINIC_NAME}
            </p>
            <p className="md:m-2 noto-serif text-white text-[4px] md:text-[9px] lg:text-sm h-[20px]">
              {localeData.CVIC_INFO.CLINIC_DESCRIPTION}
            </p>
            <div className="noto-serif p-2 h-[8px] w-auto md:h-[20px] lg:h-[30px] rounded bg-white/75 hover:bg-white flex items-center justify-center cursor-pointer">
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
