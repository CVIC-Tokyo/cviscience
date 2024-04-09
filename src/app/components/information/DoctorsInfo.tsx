import React from 'react';

const DoctorsInfo = () => {

  return (
    <div className='w-full h-auto'>
      <div className='w-full h-full p-2 md:p-4 lg:p-8'>
        <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-around p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[100px] h-[150px] md:w-[150px] md:h-[220px] lg:w-[250px] lg:h-[350px] bg-dr_Ito bg-cover bg-center'></div>
          <p className='p-4'>Dr. Ito</p>
          <p className='p-4'>Info descriptiojasfsdkjbsd blah blah blah</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorsInfo;