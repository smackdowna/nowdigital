import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface DomainCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
}

const DomainCard: React.FC<DomainCardProps> = ({ image, title, price, originalPrice }) => (
  <div className='relative bg-white w-[22vw] max-lg:w-[300px] max-md:h-[180px] hover:scale-105 duration-300 group h-[200px] px-8 py-4 flex flex-col gap-4 shadow-[0px_2px_2px_0px_#00000040]'>
    <Image src={image} alt='domain' className='absolute bottom-0 right-0 w-[60%] h-auto' />
    <div className='relative z-10 flex flex-col gap-4'>
      <span className='font-900 text-5xl max-lg:text-3xl text-home-heading'>{title}</span>
      <div className='flex flex-col'>
        <span className='text-sm sm:text-base font-900'>{price}</span>
        <span className='text-xs sm:text-sm font-700'>Instead of {originalPrice}</span>
      </div>
      <div className='flex items-center gap-1 pt-2'>
        <span className='font-roboto text-sm sm:text-sm font-700'>Get Offer</span>
        <Image src={ICONS.getofferarrow} alt='' className='transition-transform duration-300 group-hover:translate-x-4' />
      </div>
    </div>
  </div>
);

const Perfectdomain: React.FC = () => {
  const domainDetails: DomainCardProps[] = [
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
    { image: IMAGES.domainCloud, title: '.online', price: 'Rs 999.00/yr', originalPrice: 'Rs 1500.00/yr' },
  ];

  return (
    <div className='flex flex-col gap-4 bg-home-secondary-card py-[150px] max-md:py-10 max-lg:py-[40px]'>
      <span className="text-center max-md:text-3xl max-lg:text-4xl text-5xl font-900 font-roboto tracking-tight text-home-heading z-10">
        Build your brand with the perfect domain name
      </span>
      <span className="text-center text-2xl max-md:mx-8 max-lg:mx-24 sm:text-2xl font-500 font-roboto-serif tracking-tight z-10">
        With more than 300 domain extensions, you&apos;ll find the one that fits just right.
      </span>
      <div className='flex justify-center pt-24 max-md:pt-2 mx-20 max-lg:pt-10 max-2xl:mx-10 max-md:mx-2'>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8'>
          {domainDetails.map((domain, index) => (
            <DomainCard
              key={index}
              image={domain.image}
              title={domain.title}
              price={domain.price}
              originalPrice={domain.originalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfectdomain;
