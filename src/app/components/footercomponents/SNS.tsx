import React from "react";
import Image from "next/image";
import facebook from "../../../../public/logos/facebook.webp"
import youtube from "../../../../public/logos/youtube.png"
import gmaps from "../../../../public/logos/gmaps.png"

const SNS = () => {
  return (
    <div className="w-full max-w-[500px] h-[40px] flex items-center justify-center">
      <Image src={facebook} alt="facebook logo" height={45} width={45} className="sns-logo"/>
      <Image src={youtube} alt="youtube logo" height={55} width={55}className="sns-logo"/>
      <Image src={gmaps} alt="google maps logo" height={35} width={35}className="sns-logo"/>
    </div>
  )
}

export default SNS;