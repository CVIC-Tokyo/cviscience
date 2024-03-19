"use client";

import "./styles/globals.css";
import React from "react";
import About from "./components/tiles/About";
import Equipments from "./components/tiles/Equipments";
import Doctors from "./components/tiles/Doctors";
import Services from "./components/tiles/Services";
import Access from "./components/tiles/Access";

export default function Home() {
  return (
    <main className="w-screen h-screen pt-20 md:pt-44 lg:pt-48">
      <About />
      <Doctors />
      <Services />
      <Equipments />
      <Access />
    </main>
  );
}
