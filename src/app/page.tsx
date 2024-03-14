'use client'

import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./Context/store";

export default function Home() {
  const { locale, setLocale } = useGlobalContext();

  useEffect(() => {
    setLocale('en');
  });
  
  return <main className="w-full h-auto min-h-screen"></main>;
}
