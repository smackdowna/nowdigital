"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { useState } from 'react';

interface NavbarProps {
    navbarBg: string;  // Type for the navbarBg prop
}

const Navbar: React.FC<NavbarProps> = ({ navbarBg }) => {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    return (
        <div className={`z-50 fixed w-full top-0 left-0 right-0 transition-colors duration-500 ${navbarBg}`}>
            <nav className="relative items-center justify-between h-[60px] xl:h-[55px]">
                <div className="flex items-center h-full w-full">
                    <div className="bg-white bg-opacity-50 w-[112px] max-2xl:w-[53px] max-md:w-[38px] h-full rounded-br-2xl"></div>
                    <Link href="/" className="px-3 h-full">
                        <Image src={ICONS.logo} alt="logo" className="w-[117px] h-full max-sm:w-[100px]" />
                    </Link>
                    <div className="bg-white bg-opacity-50 flex-grow justify-between px-10 max-md:px-4 h-full rounded-b-lg flex items-center">
                        <div className="hidden lg:flex items-center gap-[52px] max-xl:gap-4 max-xl:ml-20 ml-36 text-[15px] text-[#000334] font-roboto font-bold">
                            <div className="relative">
                                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleProductDropdown}>
                                    <span>Products</span>
                                    <Image src={ICONS.drop} alt="dropdown icon" />
                                </div>
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
                            <div className="hidden md:flex gap-4">
                                <button className="bg-white border-[2px] max-lg:hidden border-[#0055FF] text-[#0055FF] px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Log in
                                </button>
                                <button className="bg-[#0055FF] text-white max-lg:hidden px-4 py-2 rounded-[4px] text-[15px] font-bold">
                                    Sign Up
                                </button>
                            </div>
                            <div className="flex gap-4 max-sm:gap-2 items-center">
                                <Image src={ICONS.chart} alt="Chart Icon" className="block w-[25px]" />
                                <Image src={ICONS.menu} alt="menu" className="w-[25px] lg:hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {isProductDropdownOpen && (
                <div className="absolute top-full w-[100vw] left-0  bg-[#F9FAFF]  rounded-b-lg tracking-tight">
                    <div className='flex justify-between '>
                        <div>
                            <div className=' px-10 max-xl:px-6 py-10 max-xl:py-6'>
                                <span className=' font-900  font-roboto text-3xl max-2xl:text-2xl max-xl:text-xl '>Build</span>
                                <div className=' grid grid-cols-2 gap-10 max-2xl:gap-10 max-xl:gap-2 pt-4'>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.Domain} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Domain</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Purchase & manage your own domain.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/hosting">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.Hosting} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Hosting</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/googleworkspace">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.workspace} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] rounded-lg p-2' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Google Workspace</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Acquire & efficiently manage your workspace.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/googleworkspace">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.NDE} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] rounded-lg p-2' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>NDE Mail</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Connect & optimize your email communication.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className=' px-10 max-xl:px-6  pt-6 pb-10'>
                                <span className=' font-900  font-roboto text-3xl text-center max-2xl:text-2xl max-xl:text-xl'>Manage</span>
                                <div className=' grid grid-cols-2  gap-10 max-2xl:gap-10 max-xl:gap-6 pt-4'>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.Domain} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Vision Now</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Purchase & manage your own domain.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.chatNow} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] p-2 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Chat Now</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.SpotNow} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] p-2 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Spot Now</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Acquire & efficiently manage your workspace.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.PeopleNow} alt='Domain' className=' bg-gradient-light w-[60px] max-2xl:w-[50px] max-xl:w-[40px] h-[60px] max-2xl:h-[50px] max-xl:h-[40px] p-2 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Peoples Now</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Connect & optimize your email communication.</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col pt-12 max-xl:pt-6 pb-10'>
                                <span className=' font-900 font-roboto text-3xl ml-10 max-2xl:text-2xl max-xl:text-xl'>Grow</span>
                                <div className=' flex flex-col  gap-10 max-2xl:gap-10 max-xl:gap-6 pt-4'>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.market} alt='Domain' className=' bg-gradient-light w-[60px] h-[60px]  max-2xl:w-[50px] max-xl:w-[40px]  max-2xl:h-[50px] max-xl:h-[40px] p-1 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Marketing Planner</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.newGoogle} alt='Domain' className=' bg-gradient-light w-[60px] h-[60px]  max-2xl:w-[50px] max-xl:w-[40px]  max-2xl:h-[50px] max-xl:h-[40px] p-1 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <div className=' flex  items-center gap-2'>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Google Ads</span>
                                                    <span className=' bg-cyan-300 p-1 rounded-3xl font-600 px-3'>New</span>
                                                    </div>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.Meta} alt='Domain' className=' bg-gradient-light w-[60px] h-[60px] max-2xl:w-[50px] max-xl:w-[40px]  max-2xl:h-[50px] max-xl:h-[40px] p-1 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Social Media Ads</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                  
                                    <div className=''>
                                        <Link href="/domain">
                                            <div className='flex gap-3 items-center'>
                                                <Image src={ICONS.MailNow} alt='Domain' className=' bg-gradient-light w-[60px] h-[60px] max-2xl:w-[50px] max-xl:w-[40px]  max-2xl:h-[50px] max-xl:h-[40px] p-1 rounded-lg' />
                                                <div className=' flex flex-col font-roboto '>
                                                    <span className=' font-800 text-xl max-2xl:text-lg max-xl:text-sm'>Mails Nows</span>
                                                    <span className='text-home-heading text-md max-2xl:text-[10px] max-xl:w-[150px]'>Obtain & oversee your hosting solution</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center px-10 bg-gradient-light'>
                            <div className=' flex flex-col border-white border my-auto bg-white w-[20vw]  font-roboto rounded-xl'>
                                <Image src={ICONS.productbanner} alt='banner' className='w-full' />
                                <div className=' p-4'>
                                    <span className=' font-900 text-xl max-2xl:text-xl max-xl:text-lg  tracking-tighter'>Try our interactive self-guided demo</span>
                                </div>
                                <span className='px-4 '>Experience our product with our
                                    interactive self-guided demo
                                </span>
                                <div className='px-4 py-2 font-roboto-serif'>
                                    <span className='text-home-primary font-700 text-xl'>Live Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
