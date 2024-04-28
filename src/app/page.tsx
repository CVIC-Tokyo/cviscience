import "../styles/globals.css";
import React from "react";
import About from "./components/tiles/About";
import Equipments from "./components/tiles/Equipments";
import Doctors from "./components/tiles/Doctors";
import Services from "./components/tiles/Services";
import ClinicInfo from "./components/information/ClinicInfo";
import Staff from "./components/tiles/Reservationn";
import QualitySection from "./components/information/Quality Section";
import SanityCards from "./components/SanityCards";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <About />
      <QualitySection />
      <ClinicInfo />
      <SanityCards />
      <div className="w-full max-w-[1700px] h-auto mt-10 md:mt-32 flex flex-col lg:grid grid-cols-2 p-2">
        <Services />
        <Equipments />
        <Doctors />
        <Staff />
      </div>
    </div>
  );
}
