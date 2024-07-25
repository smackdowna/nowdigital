import { IMAGES } from "@/assets";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-gradient-light">
        <div className=" flex justify-center pt-[120px]">
            <div className="flex justify-center items-center gap-10">
                <div className="flex flex-col gap-8 items-center lg:items-start lg:justify-start max-w-[680px]">
                    {/* Heading */}
                    <span className="text-5xl font-900">
                        Hey Business Owners
                        <br /> <span className=" text-[#0011FF]">Go Digital</span> Effortlessly
                    </span>
                    <p className="text-[17px] text-center lg:text-left  text-text-900/80 font-serif  font-medium">
                        Stop being static! Scale your business by going digital, the easy
                        way, with NDE. We’re technology-enabled and structured for speed and
                        efficiency to meet the ever-changing needs of today’s business.
                    </p>
                    <button className="bg-gradient-button px-10 py-3 text-white text-[18px] font-700 rounded-xl">
                        <div className=" flex gap-3 items-center">
                        <span>Get Started</span>
                        <Image src={IMAGES.arrow} alt=""/>
                        </div>
                    </button>
                </div>
                {/* video */}
                <div className="aspect-[1.6/1] w-full lg:h-[280px]  xl:h-[344px] lg:w-auto rounded-[34px] border-8 md:border-[14px] max-md:border-[10px] border-black"></div>
            </div>
        </div>
        <div className=" flex text-[20px] font-900 py-16 justify-center font-serif">12,000+ global businesses trust us to transform & grow digitally</div>
        </div>
    );
};

export default Hero;