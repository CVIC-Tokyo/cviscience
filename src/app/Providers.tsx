"use client";

import { GlobalContextProvider } from "@/context/store";
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navcomponents/Navbar";
import Access from "./components/Access";
import Footer from "./components/footercomponents/Footer";
import Preloader from "./components/Preloader";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    setPreload(false);

    setTimeout(() => {
      setPreload(false);
    }, 2000);
  }, []);

  return (
    <NextUIProvider>
      <GlobalContextProvider>
        <div className="w-full overflow-hidden bg-center bg-parallax bg-cover bg-fixed">
          {preload ? (
            <Preloader />
          ) : (
            <React.Fragment>
              <Navbar />
              {children}
              <Access />
              <Footer />
            </React.Fragment>
          )}
        </div>
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
