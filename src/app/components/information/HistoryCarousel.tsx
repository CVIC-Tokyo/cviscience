import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";
import Reveal from "../Reveal";

const History_Carousel: React.FC<CarouselProps> = ({ locale }) => {
  const [activeItem, setActiveItem] = useState(0);
  const localeData = getLocaleData(locale);

  return (
    <div className="flex h-[500px] md:h-[900px] w-full items-center justify-center">
      <div className="w-full max-w-full">
        <ul className="flex h-[450px] md:h-[840px] gap-1 md:gap-2 text-[10px] md:text-base overflow-y-scroll md:overflow-y-auto">
          {localeData.CAROUSEL.map((person, index) => {
            return (
              <li
                aria-current={activeItem === index}
                className="w-[6%] md:w-[10%] flex flex-col items-center justify-center h-full shadow-lg overflow-hidden bg-white [&[aria-current='true']]:w-[65%] md:[&[aria-current='true']]:w-[70%] md:[&[aria-current='true']]:h-[100%] rounded-xl md:hover:w-[12%] duration-500"
                key={person.name}
                onClick={() => setActiveItem(index)}
              >
                <div
                aria-current={activeItem === index}
                className="md:w-[750px] h-full flex flex-col items-center justify-center [&[aria-current='false']]:hidden p-2"
                >
                  <img src={person.img} alt={person.name} />
                  <p className="p-2 font-bold">{person.name}</p>
                  <p>{person.title}</p>
                  <Reveal>
                  <div className="p-4 md:p-8 text-start">
                    {person.history.map((bullet, index) => (
                    <p key={index}>• {bullet}</p>
                  ))}
                  </div>
                  </Reveal>
                </div>
                <img
                  aria-current={activeItem === index}
                  className="w-full h-full object-cover [&[aria-current='true']]:hidden"
                  src={person.img}
                  alt={person.name}
                />
              </li>
            );
          })} 
        </ul>
      </div>
    </div>
  );
};

export default History_Carousel;
