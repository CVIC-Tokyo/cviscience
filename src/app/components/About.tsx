import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/store";
import { getLocaleData } from "@/utils/helpers";
import { BsArrowBarRight, BsArrowRightCircle } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BiRightArrow, BiRightArrowAlt, BiRightArrowCircle } from "react-icons/bi";

const About: React.FC<AboutProps> = () => {
  const aboutImage = "/images/about_image.jpg";
  const [zoomOut, setZoomOut] = useState(false);
  const { locale } = useGlobalContext();
  const [loaded, setLoaded] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const localeData = getLocaleData(locale);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setZoomOut(true);
    }, 0); // Set a delay before starting the zoom-out animation (adjust duration as needed)
  }, [onHover]);

  return (
    <div className="w-full max-h-[50vw] overflow-hidden relative">
      <div className="w-full h-full m-auto relative">
        <div
          style={{
            backgroundImage: `url(${aboutImage})`,
            width: "100vw", // Width of the container will be the size of the screen
            height: "40vw", // You can adjust the height as needed
            transform: zoomOut ? "scale(2)" : "scale(2.5)", // Zoom-out effect
            transition: "transform 4s ease-in-out", // Transition effect for scaling
            backgroundSize: zoomOut ? "contain" : "cover", // Adjust background size for zoom-out
            backgroundPosition: "center", // Centers the image within the container
            opacity: loaded ? 1 : 0, // Initially hide the image
          }}
          className="w-full h-full bg-center bg-no-repeat shadow-lg"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center bg-black/5 hover:bg-black/25">
          <div
            className="w-[50%] h-full flex flex-col items-center justify-center"
            style={{
              transform: zoomOut ? "scale(2)" : "scale(1)", // Zoom-out effect for the overlay
              transition: "transform 4s ease-in-out", // Transition effect for scaling
            }}
          >
            <p className="noto-serif text-white text-[8px] md:text-sm lg:text-base font-bold h-[30px]">{localeData.CVIC_INFO.CLINIC_NAME}</p>
            <p className="noto-serif text-white text-[4px] md:text-[9px] lg:text-sm h-[20px]">{localeData.CVIC_INFO.CLINIC_DESCRIPTION}</p>
            <div className="p-2 h-[10px] w-[50px] md:h-[20px] md:w-[70px] lg:h-[30px] lg:w-[90px] rounded bg-white/75 hover:bg-white flex items-center justify-center">
              <p className="text:[2px] md:text-xs lg:text-xs">About </p>
              <BiRightArrowAlt/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;