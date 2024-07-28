"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

// Define a type for the Button props
type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps) => (
    <button className="text-[15px] border-[2px] max-md:text-black hover:max-md:border-none max-md:border-black text-[#0011FF] font-700 hover:text-white hover:bg-[#0011FF] border-[#0011FF] p-2 rounded">
        <span>{text}</span>
    </button>
);

const Accelerate = () => {
    const sliderRef = useRef<Slider | null>(null);
    const cards = [ICONS.card, ICONS.card, ICONS.card];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "100px", // Adjust the padding to control spacing around the cards
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 600, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };


    return (
        <div className="p-16 max-lg:p-4 bg-gradient-acc max-lg:bg-gradient-acc1">
            <div className="flex justify-center text-[43px] max-lg:text-4xl max-md:text-2xl text-center leading-[51.6px] tracking-tighter font-900 mt-10">
                <span className="w-[880px]">Accelerate Outcomes and Supercharge Experience with Ready to Go Solutions</span>
            </div>
            <div className="flex justify-center mt-4 max-md:hidden">
                <div className="bg-border-image-source w-[850px] max-lg:w-[700px] h-2"></div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-wrap gap-8 max-lg:gap-4 mt-8">
                    {["Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"].map((text) => (
                        <Button key={text} text={text} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center relative">
                <Slider {...settings} ref={sliderRef} className="w-full my-10">
                    {cards.map((card, index) => (
                        <div key={index} className="px-4 max-md:px-1 max-lg:px-2"> {/* Added padding for spacing */}
                            <Image src={card} alt="card" layout="responsive" objectFit="cover" />
                        </div>
                    ))}
                </Slider>
                <button className="absolute bg-[#0011FF] left-[30px] top-1/2 transform -translate-y-1/2" onClick={() => sliderRef.current?.slickPrev()}>
                    <Image src={ICONS.arrowleft} alt="left" />
                </button>
                <button className="absolute bg-[#0011FF] right-[30px] top-1/2 transform -translate-y-1/2" onClick={() => sliderRef.current?.slickNext()}>
                    <Image src={ICONS.arrowleft} alt="right" className="rotate-180" />
                </button>
            </div>
        </div>
    );
};

// Custom Next Arrow component
const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-[#0011FF]`}
            style={{ ...style, display: "block", right: "30px" }}
            onClick={onClick}
        >
            <Image src={ICONS.arrowleft} alt="right" className="rotate-180" />
        </div>
    );
};

// Custom Prev Arrow component
const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-[#0011FF]`}
            style={{ ...style, display: "block", left: "30px" }}
            onClick={onClick}
        >
            <Image src={ICONS.arrowleft} alt="left" />
        </div>
    );
};

export default Accelerate;
