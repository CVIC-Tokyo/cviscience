import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../Context/store";
import { getLocaleData } from "@/utils/helpers";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

const Access: React.FC<AccessProps> = () => {
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
      id="access"
      ref={containerRef}
      className="w-full h-[350px] md:h-[40vh] lg:h-[70vh] border-t-8 flex items-center justify-center bg-bottom border-black bg-fixed bg-parallax bg-cover">
    </div>
  );
};

export default Access;
