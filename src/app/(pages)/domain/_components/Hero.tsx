"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-[250px] max-md:pt-28 max-lg:pt-36 w-full flex flex-col gap-4 max-lg:gap-2 max-md:gap-2 bg-gradient-domain-hero relative z-20">
      <Image
        src={IMAGES.domain}
        alt="domain"
        className="absolute top-0 right-0 w-90 z-0"
        style={{ zIndex: '-1' }}
      />
      <Image
        src={IMAGES.domain2}
        alt="domain"
        className="absolute bottom-0 left-0 w-30 z-0"
        style={{ zIndex: '-1' }}
      />
      <span className="text-center text-[64px] max-lg:text-3xl max-2xl:text-5xl max-md:text-sm max-md:mx-2 font-900 font-roboto tracking-tighter z-10">
        Expand your horizons with <span className="text-domain-primary">.education</span>
      </span>
      <span className="text-center text-[26px] max-lg:text-[18px] font-500 max-md:text-[12px] font-roboto tracking-tighter z-10">
        Get started with the perfect domain.
      </span>
      <div className="flex justify-center w-full pb-24 max-lg:pb-4 max-md:pb-2 z-10">
        <div className="flex m-3 rounded-xl">
          <input
            className="w-[700px] max-2xl:w-[500px] max-xl:w-[400px] max-md:w-[200px] p-5 max-lg:p-3 max-md:p-2 border rounded-l-xl max-md:placeholder:text-[10px]"
            placeholder="Find and purchase a domain name"
          />
          <button
            className="bg-domain-primary text-xl max-md:text-sm text-white px-8 max-md:px-2 rounded-r-xl"
            onClick={handleSearchClick}
          >
            <span className="font-roboto font-700">Search</span>
          </button>
        </div>
      </div>
      <span className="flex text-center text-2xl max-2xl:text-xl max-lg:text-lg font-600 pt-[80px] max-lg:pt-10 max-md:pt-10 lg:pt-[120px] pb-[20px] md:pb-[30px] lg:pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif z-10">
        12,000+ global businesses trust us to transform & grow digitally
      </span>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 pb-6 overflow-hidden z-10">
        <Image src={IMAGES.brand2} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand3} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand6} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand4} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand5} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[120px]" />
        <Image src={ICONS.gol} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand1} alt="" className="w-[120px]" />
        <Image src={IMAGES.brand7} alt="" className="w-[120px]" />
        <Image src={ICONS.gol} alt="" className="w-[120px]" />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-gradient-domain-hero p-5 rounded-xl shadow-xl">
            <button className="absolute top-[-8px] right-[-10px] text-xl  bg-white  rounded-[50%] " onClick={handleCloseModal}>
              <Image src={ICONS.close} alt="close" />
            </button>
            <div className="flex justify-center w-full pb-6">
              <div className="flex m-3 rounded-xl">
                <input
                  className="w-[700px] max-2xl:w-[500px] max-xl:w-[400px] max-md:w-[200px] p-5 max-lg:p-3 max-md:p-2 border rounded-l-xl max-md:placeholder:text-[10px]"
                  placeholder="Find and purchase a domain name"
                />
                <button
                  className="bg-domain-primary text-xl max-md:text-sm text-white px-8 max-md:px-2 rounded-r-xl"
                  onClick={handleSearchClick}
                >
                  <span className="font-roboto font-700">Search</span>
                </button>
              </div>
            </div>
            <div>
              <span className=" font-900 text-2xl mx-3 pt-4">Search results</span>
            </div>
            <div>
              <div className="flex">
                <div className="flex flex-col">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
