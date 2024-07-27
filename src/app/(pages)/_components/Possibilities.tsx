"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";

// Define the type for card content
type CardContent = {
    title: string;
    description: string;
};

const cardContent: CardContent[] = [
    {
        title: "NDE Mail",
        description: "Streamline workflows and boost productivity with advanced CRM analytics."
    },
    {
        title: "Spot Now",
        description: "Real-time field employee tracking for enhanced efficiency and oversight."
    },
    {
        title: "Mails Now",
        description: "Create and automate personalised emails with dedicated IP and unlimited domain warm-up."
    },
    {
        title: "Chat Now",
        description: "Streamline workflows and boost productivity with advanced CRM analytics."
    },
    {
        title: "Vision Now",
        description: "Streamline workflows and boost productivity with advanced CRM analytics."
    },
    {
        title: "Marketing Studio",
        description: "Manage customer interactions across multiple platforms from one dashboard."
    }
];

const Possibilities: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="p-10 max-lg:p-2 bg-[#FFFBF0]">
            <div className="flex justify-center text-[43px] max-lg:text-[38px] text-center tracking-tighter font-900 text-[#000659] mt-10">
                <span>One platform. Infinite possibilities.</span>
            </div>
            <div className="flex justify-center mt-3">
                <div className="bg-border-image-source w-[800px] max-lg:w-[650px] h-2"></div>
            </div>
            <div className="flex justify-center mt-6">
                <span className="text-center text-[22px] font-serif font-500 w-[1000px]">
                    Discover our range of innovative solutions designed to streamline your operations, enhance productivity, and drive growth.
                </span>
            </div>
            <div className="flex justify-center flex-wrap gap-6 max-lg:gap-4 mt-10">
                {cardContent.map((content, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`relative w-[375px] max-lg:w-[360px] h-[145px] hover:scale-105 rounded-[10px] p-[2px] transition-all duration-700 ${hoveredCard === index ? 'bg-gradient-to-r from-blue-500 to-yellow-500' : 'bg-transparent'}`}
                    >
                        <div className="w-full h-full bg-white rounded-[8px] p-6">
                            <div className="flex gap-4">
                                <span className="text-2xl font-bold">{content.title}</span>
                                <Image src={hoveredCard === index ? IMAGES.arrowright : ICONS.cardarrow} alt="arrow" className={`${hoveredCard === index ? 'w-[18px]' : ''} duration-300`} />
                            </div>
                            <div className="text-[#000334] font-serif mt-3 text-[15px] opacity-60 w-[370px] max-lg:w-[350px]">
                                <span>{content.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Possibilities;
