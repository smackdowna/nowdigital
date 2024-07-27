import Image from "next/image"
import { IMAGES } from "@/assets"

const TakeStepNow = () => {
    return (
        <div className=' bg-background-take p-10 flex flex-col gap-4 pb-20'>
            <div className=" text-[43px] max-lg:text-3xl font-900 text-center mt-20 ">
                <span>Transform Your Vision into Reality</span>
            </div>
            <div className=" font-900 text-[30px] max-lg:text-2xl text-center">
                <span>Take the first step with us!</span>
            </div>
            <div className=" flex justify-center">
                <button className="bg-gradient-button px-10 py-3 text-white text-[18px] font-700 rounded-xl">
                    <div className=" flex gap-3 items-center">
                        <span>Take Step Now</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TakeStepNow