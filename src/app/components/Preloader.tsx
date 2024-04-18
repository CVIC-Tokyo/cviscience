'use client'

import React from "react";
import loading_heartbeat from "../animations/loading_heartbeat.json";
import Lottie from "lottie-react";

const Preloader = () => {
  return (
    <div className="absolute w-full h-full bg-white flex items-center justify-center">
      <div className="w-[300px] h-auto">
        <Lottie loop animationData={loading_heartbeat} />
      </div>
    </div>
  );
};

export default Preloader;
