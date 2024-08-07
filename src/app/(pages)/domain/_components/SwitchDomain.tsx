import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const SwitchDomain = () => {
    return (
        <div className='bg-home-secondary-card py-[150px] max-md:py-[40px]'>
            <div className='flex justify-center gap-32 max-lg:gap-10 mx-32 max-2xl:mx-24 max-lg:mx-30 max-md:m-6 max-lg:flex-col'>
                <Image src={IMAGES.swutchdomain} alt='domain' />
                <div className='w-[900px] max-2xl:w-[650px] max-lg:w-full'>
                    <span className='text-[48px] max-2xl:text-[40px] max-md:text-2xl tracking-tight font-900 text-home-heading'>Switch Domains, Effortlessly!</span>
                    <p className='w-[720px] max-2xl:w-full text-[24px] max-md:text-sm max-2xl:text-[20px] font-roboto-serif pt-10 max-md:pt-4'>
                        Already have a domain with another provider? Easily transfer it to NDE using our Smart Search Renewal without losing any of the time you&apos;ve already paid for. Plus, with our intuitive tools, you can build your very own website quickly and efficiently. Let NDE handle the technical details so you can focus on what matters most: growing your online presence.
                    </p>
                    <div className='flex flex-col gap-8 max-md:gap-2'>
                        <div className='pt-16 max-2xl:pt-8'>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px]' />
                                <span className='text-xl max-md:text-sm'>Manage domain name renewals.</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px]' />
                                <span className='text-xl max-md:text-sm'>Manage domain name renewals.</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <Image src={IMAGES.cricleCheck} alt='criclecheck' className='max-md:w-[15px]' />
                                <span className='text-xl max-md:text-sm'>Manage domain name renewals.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchDomain
