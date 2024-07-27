import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";

const Navbar = () => {
    return (
        <div className="z-50">
            <nav className="relative bg-gradient-light items-center justify-between h-[60px] xl:h-[55px]">
                {/* Logo */}
                <div className="flex items-center h-full w-full">
                    <div className="bg-white bg-opacity-50 w-[58px] h-full rounded-br-2xl"></div>
                    <Link href="/" className="px-3 h-full">
                        <Image
                            src={ICONS.logo}
                            alt="logo"
                            className="w-[117px] h-full"
                        />
                    </Link>
                    <div className="bg-white bg-opacity-50 flex-grow justify-between pl-16 px-10 h-full rounded-b-lg flex items-center">
                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-[52px] ml-36 text-[15px] text-[#000334] font-roboto font-bold">
                            <div className="flex items-center gap-2">
                                <span>Products</span>
                                <Image src={ICONS.drop} alt="" />
                            </div>
                            <div className="flex items-center gap-2">
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
                        {/* Action Buttons */}
                        <div className="hidden md:flex justify-end gap-10 ml-auto">
                            <div className="flex gap-4">
                                <button className="bg-white border-[2px] border-[#0055FF] text-[#0055FF] px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Log in
                                </button>
                                <button className="bg-[#0055FF] text-white px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Sign Up
                                </button>
                                <Image src={ICONS.chart} alt="Chart Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu Button */}
                {/* <button className="md:hidden flex items-center ml-auto">
                    <Image src={ICONS.menu} alt="Menu Icon" />
                </button> */}
            </nav>
        </div>
    );
};

export default Navbar;
