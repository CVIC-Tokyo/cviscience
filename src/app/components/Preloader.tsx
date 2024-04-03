import React from 'react';
import loading_heartbeat from "../animations/loading_heartbeat.json"
import Lottie from 'lottie-react';

const Preloader = () => {

  return (
    <div className='absolute w-full h-full bg-white'>
      <div className='w-[300px] h-aut border-2'>
        <Lottie loop animationData={loading_heartbeat} />
      </div>
    </div>
  )
}

export default Preloader;