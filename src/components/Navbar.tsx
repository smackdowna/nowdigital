import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";

const Navbar = () => {
    return (
        <div className="z-50">
            <nav className="relative bg-gradient-light items-center justify-between h-[60px] xl:h-[55px]">
                {/* Logo */}
                <div className="flex items-center h-full w-full">
                    <div className="bg-white bg-opacity-50 w-[58px] max-lg:w-[38px] max-md:w-[28px] h-full rounded-br-2xl"></div>
                    <Link href="/" className="px-3 h-full">
                        <Image
                            src={ICONS.logo}
                            alt="logo"
                            className="w-[117px] h-full"
                        />
                    </Link>
                    <div className="bg-white bg-opacity-50 flex-grow justify-between pl-16 px-10 max-md:px-4 h-full rounded-b-lg flex items-center">
                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-[52px] max-xl:gap-4 max-xl:ml-20 ml-36 text-[15px] text-[#000334] font-roboto font-bold">
                            <div className="flex items-center gap-2">
                                <span>Products</span>
                                <Image src={ICONS.drop} alt="dropdown icon" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Resources</span>
                                <Image src={ICONS.drop} alt="dropdown icon" />
                            </div>
                            <div>
                                <span>Demo</span>
                            </div>
                            <div>
                                <span>Contact</span>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex justify-end gap-10 ml-auto">
                            <div className="hidden md:flex gap-4">
                                <button className="bg-white border-[2px] max-lg:hidden border-[#0055FF] text-[#0055FF] px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Log in
                                </button>
                                <button className="bg-[#0055FF] text-white max-lg:hidden px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Sign Up
                                </button>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Image src={ICONS.chart} alt="Chart Icon" className="block w-[25px]" />
                                <Image src={ICONS.menu} alt="menu" className="w-[25px] lg:hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
