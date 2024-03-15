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
    <main className="w-full h-auto pt-28 md:pt-38 lg:pt-48 min-h-screen">
      <About />
      <Services />
      <Equipments />
      <Doctors />
      <Access />
    </main>
  );
}
