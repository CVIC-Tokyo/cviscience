import React from 'react';
import h_br_bl from '../../../../public/images/services/h_br_bl.webp';
import heart from '../../../../public/images/services/heart.webp'
import brain from '../../../../public/images/services/brain.webp'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { getLocaleData } from '@/utils/helpers';
import { useGlobalContext } from '@/context/store';

type Price = string | Record<string, string>;

interface ServiceCardProps {
  title: string;
  description: string;
  price: Price;
  inclusions: string[];
  recommendation: string;
  target: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, inclusions, recommendation, target }) => {

  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);
  
  const imageMap: Record<string, StaticImageData> = {
    'Premium Dock Plus' : h_br_bl,
    'プレミアムドック・プラス': h_br_bl,
    'Heart + Brain Dock Plus': h_br_bl,
    '心臓+脳ドック・プラス': h_br_bl,
    'Heart Dock Plus': heart,
    '心臓ドック・プラス': heart,
    'Brain Dock': brain,
    '脳ドック': brain,
  };

  const image = imageMap[title];

  return (
    <div className=" bg-white h-auto rounded-lg shadow-md pb-8 relative">
      <div className='bg-cvic-red p-1 md:p-2 rounded-t-lg flex flex-col items-center justify-center shadow-lg'>
        <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
        <Image src={image} alt="title"/>
      </div>
      <div className='p-4'>
        <p className="text-sm md:text-base mb-4 p-2">{description}</p>
        {price ? (
          typeof price === 'string' ? (
            <p className="font-semibold text-sm md:text-base lg:text-lg mb-2">{price}</p>
          ) : (
            <div className="text-sm md:text-base lg:text-lg mb-2">
              {Object.entries(price).map(([key, value], index) => (
                <p key={index}> <span className="font-semibold text-sm md:text-base lg:text-lg mb-2">{value}</span></p>
              ))}
            </div>
          )
        ) : (
          <p className="text-lg font-semibold mb-2">Price not available</p>
        )}
        {inclusions && inclusions.length > 0 && (
          <ul className="list-disc pl-5 mb-4">
            {inclusions.map((item: string, index: number) => (
              <li key={index} className="text-gray-600 text-sm md:text-base lg:text-lg px-4">{item}</li>
            ))}
          </ul>
        )}
        <div className='w-full p-8'>
          <p className="text-black mb-2 text-[10px] md:text-sm">{target}</p>
        </div>
        
        
      <p className="mb-2 text-[10px] md:text-xs italic text-cvic-red">{recommendation ? recommendation : null}</p>
      </div>
          <Link className='absolute bottom-2 right-2 bg-cvic-red text-white px-4 py-2 rounded-md'
          href={'/pages/reservation'} >
            <p className='text-xs md:text-base'>{localeData.RESERVATION.TITLE}</p>
          </Link>
    </div>
  );
};

const Services = ({ services }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.values(services).map((service: any, index: number) => (
        <ServiceCard
          key={index}
          title={service.TITLE}
          description={service.DESCRIPTION}
          price={service.PRICE}
          inclusions={service.INCLUSIONS}
          recommendation={service.RECOMMENDATION}
          target={service.TARGET}
        />
      ))}
    </div>
  );
};

export default Services;
