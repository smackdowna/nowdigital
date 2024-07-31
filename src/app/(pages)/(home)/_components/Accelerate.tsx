"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

// Define a type for the Button props
type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive: boolean;
};

const Button = ({ text, onClick, isActive }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`text-[15px] border-[2px] max-md:text-black 
        ${isActive ? "bg-[#0011FF] text-white" : "text-[#0011FF]"} 
        font-700 hover:text-white hover:bg-[#0011FF] border-[#0011FF] p-2 rounded`}
    >
        <span>{text}</span>
    </button>
);

const Accelerate = () => {
    const sliderRef = useRef < Slider | null > (null);
    const cards = [ICONS.card, ICONS.card, ICONS.card, ICONS.card, ICONS.card];
    const [activeButton, setActiveButton] = useState("Mails Now");

    const buttons = ["Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "100px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index: number) => setActiveButton(buttons[index]),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    const handleButtonClick = (index: number, text: string) => {
        sliderRef.current?.slickGoTo(index);
        setActiveButton(text);
    };

    useEffect(() => {
        // Set the initial slide to "Mails Now"
        sliderRef.current?.slickGoTo(0);
    }, []);

    return (
        <div className="bg-gradient-acc max-lg:bg-gradient-acc1 warpper">
            <div className="p-32 max-lg:p-4  max-width">
                <div className="flex justify-center  mt-10">
                    <span className="w-[880px] text-[43px] max-lg:text-4xl max-md:text-2xl text-center leading-[51.6px] text-home-heading font-900">Accelerate Outcomes and Supercharge Experience with Ready to Go Solutions</span>
                </div>
                <div className="flex justify-center mt-4 max-md:hidden">
                    <div className="bg-border-image-source w-[850px] max-lg:w-[700px] h-2"></div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center flex-wrap gap-8 max-lg:gap-4 mt-8">
                        {buttons.map((text, index) => (
                            <Button
                                key={text}
                                text={text}
                                onClick={() => handleButtonClick(index, text)}
                                isActive={activeButton === text}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <Slider {...settings} ref={sliderRef} className="w-full my-10">
                        {cards.map((card, index) => (
                            <div key={index} className="px-4 max-md:px-1 max-lg:px-2">
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
