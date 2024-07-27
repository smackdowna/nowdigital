import { TESTIMONIALS } from "@/assets/data/testmonials";
import TestimonialCard from "./TestimonialsCard";

const Testimonials: React.FC = () => {
    return (
        <div className=" bg-[#FFFBF0]   gap-10 pb-36">
            <div className=" pt-28 flex  justify-center text-[#000334]">
                <span className="text-dark-200  text-lg md:text-[28px] text-center xl:text-2xl font-900 tracking-tighter">
                    People just love working with us!
                </span>
            </div>
            <div className=" pb-10 pt-8 flex  justify-center text-[#000659]">
                <span className="text-dark-200 text-[42px] max-lg:text-[30px] max-lg:w-[500px] tracking-tighter font-900  text-center ">
                    Digitalized Business Happy Customers That’s Impact
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-full ">
                {TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} index={index} />
                ))}
            </div>
        </div>
    );
};
export default Testimonials;