import Image from "next/image";
import comma from "@/assets/images/Quotation-Symbol-PNG-Clipart.png";
import { TESTIMONIALS } from "@/assets/data/testmonials";
import { twMerge } from "tailwind-merge";

type Props = (typeof TESTIMONIALS)[number] & {
  index: number;
};

const TestimonialCard = (props: Props) => {
  const isLarge = props.index === 0 || props.index === 3;
  const width = {
    card: isLarge ? " w-[700px] max-lg:w-[400px] max-xl:w-[650px] max-md:w-[300px]" : " w-[500px] max-lg:w-[340px] max-xl:w-[350px] max-md:w-[300px]",
    quote: isLarge ? "w-[180px] max-lg:w-[120px]" : "w-[150px] max-lg:w-[120px]",
  };
  return (
    <div
      className={twMerge(
        "relative w-full flex flex-col group max-lg:mx-0 h-[156px] max-md:p-3 max-md:mx-0  sm:h-[180px] md:h-[250px] hover:bg-[#C9CDFF]  xl:px-12 md:p-8 overflow-hidden bg-[#ECEDFF]",
        width.card
      )}
    >
      <Image
        className="absolute right-0 top-0 max-md:w-[90px] max-md:group-hover:scale-110  w-[151px] md:group-hover:scale-110 aspect-square object-contain object-right"
        src={props.backgroundImage}
        alt="Testimonial background"
      />
      <div className="mb-1.5">
        <Image
          src={comma}
          width={30}
          height={30}
          alt="Quote symbol"
          className=" max-md:w-[15px]"
        />
      </div>
      <div className={twMerge("w-[68%] max-w-[calc(100%-100px)] xl:max-w-[calc(100%-150px)] max-md:text-[12px]")}>
        <span className="text-[10px] max-lg:text-[8px] sm:text-[12px] md:text-[16px]  text-[#212529] font-merriweather font-600">
          {props.quote.length > 130
            ? `${props.quote.slice(0, 130)}...`
            : props.quote}
        </span>
      </div>
      <div className="flex flex-col mt-auto">
        <span className="text-[16px] md:text-[20px] font-900 font-source-sans-pro">
          {props.author}
        </span>
        <span className="text-[10px] md:text-[16px]">{props.position}</span>
      </div>
    </div>
  );
};
export default TestimonialCard;