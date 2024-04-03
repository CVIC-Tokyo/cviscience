"use client";

import { GlobalContextProvider } from "@/context/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Navbar from "./components/navcomponents/Navbar";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <GlobalContextProvider>
        <div className="w-full overflow-hidden">
        <Navbar />
        {children}
        <Access />
        <Footer />

        </div>
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
