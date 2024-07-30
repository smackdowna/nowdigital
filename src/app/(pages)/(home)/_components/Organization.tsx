import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

// Define the type for card data
type CardData = {
  imgSrc: string;
  title: string;
  description: string;
};

const cardData: CardData[] = [
  {
    imgSrc: ICONS.brand,
    title: "Boost productivity with employee tracking.",
    description: "Streamline workflows and boost productivity with advanced CRM analytics."
  },
  {
    imgSrc: IMAGES.cardbrand,
    title: "Bring your Business Online",
    description: "Take your business online and reach customers worldwide."
  },
  {
    imgSrc: IMAGES.cardbrand1,
    title: "Understand your customers' needs.",
    description: "Gain deep insights into customer needs to tailor your offerings effectively."
  },
  {
    imgSrc: IMAGES.cardbrand2,
    title: "Show your brand to more people",
    description: "Enhance brand visibility and connect with more potential customers daily."
  },
  {
    imgSrc: IMAGES.cardbrand3,
    title: "Maximise leads and conversions",
    description: "Optimize your efforts to generate high-quality leads and increase sales."
  },
  {
    imgSrc: IMAGES.cardbrand4,
    title: "Engage your customers",
    description: "Foster stronger relationships with personalised interactions across various channels."
  },
  {
    imgSrc: IMAGES.cardbrand5,
    title: "Engage your customers",
    description: "Foster stronger relationships with personalised interactions across various channels."
  },
  {
    imgSrc: IMAGES.cardbrand6,
    title: "Leverage Data-Driven Decisions",
    description: "Use advanced analytics to make informed decisions and drive growth."
  },
];

// Define the type for Button props
type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className="bg-white w-[150px] text-[15px] border-[2px] text-[#0011FF] font-700 border-[#0011FF] p-2 rounded-2xl">
    <span className="">{text}</span>
  </button>
);

// Define the type for Card props
type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => (
  <div className='bg-[#FFFBF0] w-[282px] h-[275px] rounded-[10px] pt-4 hover:scale-105 hover:border-[#0011FF] hover:border-[2px] duration-500'>
    <Image src={imgSrc} alt={title} className="m-3" />
    <div className="flex gap-4 m-2">
      <span className="text-[22px] leading-[28.13px] tracking-tighter font-900 ">{title}</span>
    </div>
    <div className="text-[#000334] font-serif tracking-tighter mt-3 text-[17px] m-3 font-400 opacity-50 w-[250px]">
      <span>{description}</span>
    </div>
  </div>
);

const Organization: React.FC = () => {
  return (
    <div className='p-10 max-md:p-6 bg-[#ECEDFF]'>
      <div className='flex justify-center text-[43px] max-md:text-2xl text-center max-lg:text-[34px] leading-[51.6px] tracking-tighter font-900 mt-10'>
        <span>Grow your organization faster than ever</span>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='bg-border-image-source w-[850px] max-lg:w-[670px] max-md:hidden h-2'></div>
      </div>
      <div className='flex justify-center mt-10 max-md:mt-4'>
        <span className='text-center text-[20px] font-serif font-600 w-[600px]'>
          Empower and take your business to the next level with our comprehensive approach.
        </span>
      </div>
      <div className="flex justify-center mx-16 max-lg:mx-1">
        <div className="flex gap-4 mt-8 overflow-x-scroll hide-scrollbar">
          {["Domain", "Hosting", "Website Builder", "Marketing Studio", "Google Ads", "Vision Now", "Mails Now", "Chat Now", "Nmail", "Spot Now", "Peoples Now"].map((text) => (
            <div key={text}>
              <Button text={text} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-6 max-lg:gap-10 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Organization;
