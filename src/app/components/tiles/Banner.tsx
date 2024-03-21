import React from "react";

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="w-full h-[50px] md:h-[10vh]">
      <div className="w-full h-full bg-parallax bg-center bg-cover bg-fixed"></div>
    </div>
  );
};

export default Banner;
