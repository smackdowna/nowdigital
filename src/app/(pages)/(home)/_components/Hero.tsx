import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative bg-gradient-light wrapper">
            <div className="absolute inset-0 z-0">
                <Image 
                    src={IMAGES.home} 
                    alt="home banner" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100}
                />
            </div>
            <div className="relative z-10 flex justify-center pt-[160px] max-lg:pt-[100px]">
                <div className="flex max-lg:flex-col justify-center items-center gap-16 max-xl:gap-6">
                    <div className="flex flex-col gap-5 max-md:gap-6 items-center lg:items-start lg:justify-start max-w-[600px]">
                        {/* Heading */}
                        <h1 className="text-[48px] font-roboto max-md:text-2xl max-lg:text-4xl max-xl:text-[40px] text-center tracking-[-2px] text-home-heading leading-[57.6px] font-800">
                            Hey Business Owners
                            <br /> <span className="text-[#0011FF]">Go Digital</span> Effortlessly
                        </h1>
                        <p className="text-[18px] font-roboto-serif max-md:text-justify tracking-wide max-md:px-12 text-text-900/80 w-[580px] max-xl:w-[500px] max-md:w-[380px] text-home-body font-400">
                            Stop being static! Scale your business by going digital, the easy
                            way, with NDE. We’re technology-enabled and structured for speed and
                            efficiency to meet the ever-changing needs of today’s business.
                        </p>
                        <button className="bg-gradient-button px-10 py-3 text-white text-[18px] font-700 rounded-[8px] shadow-[0px_2px_2px_0px_#00000040]">
                            <div className="flex gap-3 items-center">
                                <span>Get Started</span>
                                <Image src={IMAGES.arrow} alt="arrow" />
                            </div>
                        </button>
                    </div>
                    {/* Video Placeholder */}
                    <div className="aspect-[1.6/1] bg-[#FEF3E3] w-full max-md:w-[380px] max-sm:w-[300px] lg:h-[300px] xl:h-[344px] lg:w-auto rounded-[34px] border-8 md:border-[14px] max-md:border-[10px] border-black"></div>
                </div>
            </div>
            <span className="flex text-center text-[17px] font-600 pt-[120px] pb-[40px] leading-[20.4px] text-home-body justify-center font-roboto-serif">
                12,000+ global businesses trust us to transform & grow digitally
            </span>
            <div className="flex justify-center items-center gap-16 pb-6 overflow-hidden">
                <Image src={IMAGES.brand2} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand3} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand6} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand4} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand5} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand1} alt="" className="w-[100px] h-[100px]" />
                <Image src={IMAGES.brand7} alt="" className="w-[100px] h-[100px]" />
                <Image src={ICONS.gol} alt="" className="w-[100px] h-[100px]" />
            </div>
        </div>
    );
};

export default Hero;
