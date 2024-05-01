"use client";

import { GlobalContextProvider } from "@/context/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Navbar from "./components/navcomponents/Navbar";
import Access from "./components/Access";
import Footer from "./components/footercomponents/Footer";
import Preloader from "./components/Preloader";
import { useAuth } from "@/context/authContext";
import Login from "./components/LogIn";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSignedIn = useAuth();

  return (
    <NextUIProvider>
      <GlobalContextProvider>
        {isSignedIn ? (
          <div className="w-full overflow-hidden bg-center bg-parallax_sm md:bg-parallax bg-cover bg-fixed flex flex-col items-center justify-start">
            <React.Fragment>
              <Preloader />
              <Navbar />
              {children}
              <Access />
              <Footer />
            </React.Fragment>
          </div>
        ) : (
          <div className="w-full h-full bg-center bg-parallax_sm md:bg-parallax bg-cover bg-fixed flex flex-col items-center justify-start">
            <Login />
            <Footer />
          </div>
        )}
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
