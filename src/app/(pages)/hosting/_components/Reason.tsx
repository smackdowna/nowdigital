import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Reason = () => {
  return (
    <div className=' flex bg-background-reason px-28 pt-16  justify-between tracking-tight'>
        <div className='pt-16 w-[900px]'>
            <span className=' font-900 font-roboto text-6xl leading-[70px]  tracking-tight text-white'>Reason For Choosing Our <br /> Strike Hosting Consultancy</span>
            <div className='pt-16 ml-24 text-white'>
                <span className=' font-900 font-roboto text-4xl '>15+ Years Web Hosting Company</span>
                <p className=' font-roboto-serif  text-3xl py-6'>Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.</p>
            </div>
            <div className='pt-4 ml-24 text-white'>
                <span className=' font-900 font-roboto text-4xl '>Safe and Secured</span>
                <p className=' font-roboto-serif  text-3xl py-6'>Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.</p>
            </div>
            <div className='pt-4 ml-24 text-white'>
                <span className=' font-900 font-roboto text-4xl '>24/7 Technical Support</span>
                <p className=' font-roboto-serif  text-3xl py-6'>Traditional WordPress, you get all the features, tools, <br /> and guidance you need to build and launch.</p>
            </div>
        </div>
        <div>
            <Image src={IMAGES.person} alt='person' />
        </div>
    </div>
  )
}

export default Reason