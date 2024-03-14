import React, { useState, useEffect } from "react";

const About: React.FC<AboutProps> = () => {
  const aboutImage = "/images/about_image.JPG";
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const img = new Image();
    img.src = aboutImage;
    img.onload = () => {
      setImageHeight(img.height);
    };
  }, [aboutImage]);

  return (
    <div className="w-full h-auto">
      <div className="h-auto w-screen m-auto">
        <div
          style={{
            backgroundImage: `url(${aboutImage})`,
            height: `${imageHeight}px`,
          }}
          className="w-full bg-cover bg-center shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default About;
