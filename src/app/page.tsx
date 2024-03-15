"use client";

import "./styles/globals.css";
import React from "react";
import About from "./components/About";
import Equipments from "./components/Equipments";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Access from "./components/Access";

export default function Home() {
  return (
    <main className="w-full h-auto pt-36 md:pt-38 lg:pt-48 min-h-screen">
      <About />
      <Services />
      <Equipments />
      <Doctors />
      <Access />
    </main>
  );
}
