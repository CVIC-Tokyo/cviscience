'use client'

import React from 'react';
import { useGlobalContext } from '@/context/store';
import { getLocaleData } from '@/utils/helpers';

const DoctorsInfo = () => {
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);


  return (
    <div className='w-full h-auto grid grid-cols-2 md:grid-cols-3 text-[12px] md:text-base'>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drTerashima bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.TERASHIMA}</p>
          <p className='p-4'>{localeData.DOCTORS.TERASHIMA_TITLE}</p>
        </div>
      </div>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drTakamura bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.TAKAMURA}</p>
          <p className='p-4'>{localeData.DOCTORS.TAKAMURA_TITLE}</p>
        </div>
      </div>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drItoJ bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.ITOJ}</p>
          <p className='p-4'>{localeData.DOCTORS.ITOJ_TITLE.join(' ,')}</p>
        </div>
      </div>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drWatanabe bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.WATANABE}</p>
          <p className='p-4'>{localeData.DOCTORS.WATANABE_TITLE}</p>
        </div>
      </div>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drIto bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.ITOM}</p>
          <p className='p-4'>{localeData.DOCTORS.ITOM_TITLE}</p>
        </div>
      </div>
      <div className='w-full h-full p-2'>
        <div className='w-full flex flex-col md:flex-row items-center justify-start md:justify-stretch h-full p-2 rounded-lg shadow-xl bg-white hover:scale-105 duration-500'>
          <div className='w-[90px] h-[130px] md:w-[160px] md:h-[190px] bg-drTanabe bg-cover bg-center'></div>
          <p className='p-4'>{localeData.DOCTORS.TANABE}</p>
          <p className='p-4'>{localeData.DOCTORS.TANABE_TITLE}</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorsInfo;