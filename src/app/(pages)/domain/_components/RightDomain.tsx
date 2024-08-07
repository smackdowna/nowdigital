import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description }) => (
  <div className='flex flex-col gap-2'>
    <span className='text-xl md:text-2xl lg:text-5xl font-900 font-roboto text-home-heading'>{title}</span>
    <p className='pr-0 lg:pr-16 text-base md:text-lg lg:text-2xl font-roboto-serif'>{description}</p>
  </div>
);

const RightDomain: React.FC = () => {
  const description = 'Include your brand name, location, and other identifying elements to create a unique and easily searchable domain.';

  return (
    <div className='bg-domain-primary-card flex flex-col items-center py-10 lg:pt-[100px] gap-10 '>
      <span className='text-center text-4xl md:text-5xl lg:text-6xl font-900 tracking-tight font-roboto text-home-heading'>
        Finding the Right Domain Name
      </span>
      <span className='text-center text-xl md:text-2xl font-roboto-serif font-500 tracking-tight'>
        It&apos;s easier than you think!
      </span>
      <div className='flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20 items-center px-5 lg:px-0 mx-24 max-2xl:mx-2 max-lg:mx-10 max-md:mx-4'>
        <div className='w-full lg:w-[680px] py-10 lg:py-32 flex flex-col gap-8 ml-8 max-lg:ml-0'>
          <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Use Relevant Keywords" description={description} />
        </div>
        <Image src={IMAGES.rightdomain} alt='rightdomain' className='w-full lg:w-[750px]' />
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 items-center px-5 lg:px-0 mx-24 max-lg:mx-10 max-md:mx-4'>
        <Image src={IMAGES.rightdomain} alt='rightdomain' className='w-full lg:w-[700px]' />
        <div className='w-full lg:w-[680px] py-10 lg:py-32 flex flex-col gap-16'>
          <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Use Relevant Keywords" description={description} />
          <InfoSection title="Use Relevant Keywords" description={description} />
        </div>
      </div>
    </div>
  );
};

export default RightDomain;
