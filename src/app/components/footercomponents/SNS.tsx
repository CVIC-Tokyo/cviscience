import React from "react";
import Image from "next/image";
import facebook from "../../../../public/logos/facebook.webp";
import youtube from "../../../../public/logos/youtube.png";
import gmaps from "../../../../public/logos/gmaps.png";

function opneLinkInNewTab(url: string) {
  window.open(url, "_blank");
}

const SNS = () => {
  return (
    <div className="w-full max-w-[500px] h-[40px] flex items-center justify-center">
      <Image
        src={facebook}
        alt="facebook logo"
        height={45}
        width={45}
        className="sns-logo"
        onClick={() =>
          opneLinkInNewTab("https://www.facebook.com/CVICIidabashi")
        }
      />
      <Image
        src={youtube}
        alt="youtube logo"
        height={55}
        width={55}
        className="sns-logo"
        onClick={() =>
          "https://www.youtube.com/channel/UCiU_fpZA-P_VNvwwn8ESrLw"
        }
      />
      <Image
        src={gmaps}
        alt="google maps logo"
        height={35}
        width={35}
        className="sns-logo"
        onClick={() =>
          opneLinkInNewTab(
            "https://www.google.com/maps/place/CVIC+Medical+Corporation+%2F+Cardiovascular+Imaging+Clinic+Iidabashi/@35.7047471,139.7410899,16z/data=!3m2!4b1!5s0x60188c4f8b977bc3:0x32c5083c13aa1e03!4m6!3m5!1s0x60188c4f8c8f4919:0x797025f7a7942b1d!8m2!3d35.7047428!4d139.7436648!16s%2Fg%2F1tfd6zfz?entry=ttu",
          )
        }
      />
    </div>
  );
};

export default SNS;
