"use client";

import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute inset-0 z-50 bg-white flex items-center justify-center ${visible ? "" : "hidden"}`}
    >
      <div className="w-[300px] h-auto flex flex-col items-center justify-center">
        <img src="/animations/loading_heartbeat.gif" alt="Loading animation" />
        <p className="text-cvic-red">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
