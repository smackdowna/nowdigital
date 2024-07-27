"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Define a type for the Button props
type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps) => (
    <button className="text-[15px] border-[2px] text-[#0011FF] font-700 hover:text-white hover:bg-[#0011FF] border-[#0011FF] p-2 rounded">
        <span>{text}</span>
    </button>
);

const Accelerate = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cards = [ICONS.card, ICONS.card, ICONS.card];
    const [currentIndex, setCurrentIndex] = useState(Math.floor(cards.length / 2));
    const cardWidth = 1000; // Width of each card
    const cardMargin = 30; // Margin to show part of the next card

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const offset = (containerWidth - cardWidth) / 2;
            scrollContainerRef.current.scrollTo({ left: index * (cardWidth + cardMargin) - offset, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    const scrollLeft = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const scrollRight = () => {
        const newIndex = Math.min(currentIndex + 1, cards.length - 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    return (
        <div className='p-10 max-lg:p-4 bg-gradient-acc'>
            <div className='flex justify-center text-[43px] max-lg:text-4xl text-center leading-[51.6px] tracking-tighter font-900 mt-10'>
                <span className="w-[880px]">Accelerate Outcomes and Supercharge Experience with Ready to Go Solutions</span>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='bg-border-image-source w-[850px]  max-lg:w-[700px] h-2'></div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-wrap gap-8 mt-8">
                    {["Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"].map((text) => (
                        <Button key={text} text={text} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center relative">
                <div className="flex justify-center my-10 gap-10 w-[1200px] overflow-hidden">
                    <div className="flex transition-transform duration-500" ref={scrollContainerRef} style={{ transform: `translateX(-${currentIndex * (cardWidth + cardMargin)}px)` }}>
                        {cards.map((card, index) => (
                            <div key={index} className="mx-2" style={{ minWidth: `${cardWidth}px`, marginRight: `${cardMargin}px` }}>
                                <Image src={card} alt="card" layout="responsive" objectFit="cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="absolute bg-[#0011FF] left-[180px] top-1/2 transform -translate-y-1/2" onClick={scrollLeft}>
                    <Image src={ICONS.arrowleft} alt="left" />
                </button>
                <button className="absolute bg-[#0011FF] right-[190px] top-1/2 transform -translate-y-1/2" onClick={scrollRight}>
                    <Image src={ICONS.arrowleft} alt="right" className="rotate-180" />
                </button>
            </div>
        </div>
    );
}

export default Accelerate;
