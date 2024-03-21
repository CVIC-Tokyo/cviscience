"use client";

import "./styles/globals.css";
import React from "react";
import About from "./components/tiles/About";
import Equipments from "./components/tiles/Equipments";
import Doctors from "./components/tiles/Doctors";
import Services from "./components/tiles/Services";
import Access from "./components/tiles/Access";
import Banner from "./components/tiles/Banner";

export default function Home() {
  return (
    <main className="w-full h-full pt-16 md:pt-40">
      <About />
      <Doctors />
      <Banner />
      <Services />
      <Banner />
      <Equipments />
      <Access />
    </main>
  );
}
