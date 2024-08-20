"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@/assets';
import Cart from './Cart';
import { useState } from 'react';

interface NavbarProps {
    navbarBg: string;  // Type for the navbarBg prop
}

const Navbar: React.FC<NavbarProps> = ({ navbarBg }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`z-50 fixed w-full top-0 left-0 right-0 transition-colors duration-500 ${navbarBg}`}>
            <nav className="relative items-center justify-between h-[60px] xl:h-[55px]">
                <div className="flex items-center h-full w-full">
                    <div className=" bg-white bg-opacity-50 w-[112px] max-2xl:w-[53px] max-md:w-[38px] h-full rounded-br-2xl"></div>
                    <Link href="/" className="px-3 h-full">
                        <Image src={ICONS.logo} alt="logo" className="w-[117px] h-full max-sm:w-[100px]" />
                    </Link>
                    <div className="bg-white bg-opacity-50 flex-grow justify-between px-10 max-md:px-4 h-full rounded-b-lg flex items-center">
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
                        <div className="flex justify-end gap-10 ml-auto">
                            <div className="hidden md:flex gap-4 sm:hidden">
                                <button className="bg-white border-[2px] max-lg:hidden border-[#0055FF] text-[#0055FF] px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Log in
                                </button>
                                <button className="bg-[#0055FF] text-white max-lg:hidden px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Sign Up
                                </button>
                            </div>
                            <div className="flex gap-4 max-sm:gap-2 items-center">
                                <Image src={ICONS.chart} alt="Chart Icon" className="block w-[25px] cursor-pointer" onClick={toggleOpen} />
                                {isOpen && (
                                        <Cart onClick={toggleOpen}/>
                                )}
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
