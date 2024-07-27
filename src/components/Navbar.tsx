import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";

const Navbar = () => {
    return (
        <div className="fixed z-50">
            <nav
                className="relative bg-gradient-light  items-center justify-between h-[60px] xl:h-[55px] "
            >
                {/* logo */}
                <div className="flex items-center justify-center h-full w-full">
                    <div className="bg-white bg-opacity-50 w-[58px] h-full rounded-br-2xl"></div>
                    <Link href="/" className="px-3  h-full">
                        <Image
                            src={ICONS.logo}
                            alt="logo"
                            className="w-[117px] h-full"
                        />
                    </Link>
                    <div className="bg-white bg-opacity-50 flex-grow  justify-between  pl-16  px-10 h-full rounded-b-lg flex items-center  ">
                        <div className="flex justify-between ">
                            <div className="flex items-center gap-[52px] ml-36  max-lg:hidden text-[15px] text-[#000334] font-roboto font-bold">
                                <div className="flex gap-2">
                                    <span>Products</span>
                                    <Image src={ICONS.drop} alt="" />
                                </div>
                                <div className="flex gap-2">
                                    <span>Resources</span>
                                    <Image src={ICONS.drop} alt="" />
                                </div>
                                <div>
                                    <span>Demo</span>
                                </div>
                                <div>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-10 ml-[440px] ">
                            <div className="flex gap-4">
                                <button className=" bg-white border-[2px] border-[#0055FF] text-[#0055FF] px-2 py-1 rounded-[4px] text-[15px] font-bold max-lg:hidden">Log in</button>
                                <button className=" bg-[#0055FF] text-white px-2 py-1 rounded-[4px] text-[15px] font-bold max-lg:hidden">Sign Up</button>
                                <Image src={ICONS.chart} alt={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar