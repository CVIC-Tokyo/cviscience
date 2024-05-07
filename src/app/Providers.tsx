"use client";

import { GlobalContextProvider } from "@/context/store";
import { NextUIProvider } from "@nextui-org/react";
import React, { useState } from "react";
import Navbar from "./components/navcomponents/Navbar";
import Access from "./components/Access";
import Footer from "./components/footercomponents/Footer";
import Preloader from "./components/Preloader";
import Login from "./components/LogIn";
import Signup from "./components/Singup";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [auth, setAuth] = useState(undefined);
  const [signIn, setIsSignIn] = useState(false);

  function getAuth (authObject: any) {
    setAuth(authObject.user);
  }
  
  const handleIsSignIn = () => {
    setIsSignIn(!signIn);
  }

  return (
    <NextUIProvider>
      <GlobalContextProvider>
        {auth && signIn ? (
          <div className="w-full overflow-hidden bg-center bg-gradient-to-b from-blue-300 to-white md:bg-parallax bg-cover bg-fixed flex flex-col items-center justify-start">
            <React.Fragment>
              <Preloader />
              <Navbar auth={auth} />
              {children}
              <Access />
              <Footer />
            </React.Fragment>
          </div>
        ) : (
          <div className="w-full h-full bg-center bg-gradient-to-b from-blue-300 to-white md:bg-parallax bg-cover bg-fixed flex flex-col items-center justify-start">
            {
              signIn ?
              <Signup handleIsSignIn={handleIsSignIn}/>
              :
              <Login handleIsSignIn={handleIsSignIn} getAuth={getAuth}/>
            }
            <Footer />
          </div>
        )}
      </GlobalContextProvider>
    </NextUIProvider>
  );
}
