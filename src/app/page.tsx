"use client";

import "../styles/globals.css";
import React from "react";
import About from "./components/tiles/About";
import Equipments from "./components/tiles/Equipments";
import Doctors from "./components/tiles/Doctors";
import Services from "./components/tiles/Services";
import ClinicInfo from "./components/information/ClinicInfo";
import Staff from "./components/tiles/Staff";

export default function Home() {
  return (
    <div className="w-full h-auto snap-mandatory snap-y">
        <About />
      <div className="w-full h-auto flex flex-col lg:grid grid-cols-2">
        <Services />
        <Equipments />
        <Doctors />
        <Staff />
      </div>
      <ClinicInfo />
    </div>
  );
}
