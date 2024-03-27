"use client";

import "../styles/globals.css";
import React from "react";
import About from "./components/About";
import Equipments from "./components/tiles/Equipments";
import Doctors from "./components/tiles/Doctors";
import Services from "./components/tiles/Services";

export default function Home() {
  return (
    <div className="w-full h-auto snap-mandatory snap-y">
      <About />
      <Services />
      <Equipments />
      <Doctors />
    </div>
  );
}
