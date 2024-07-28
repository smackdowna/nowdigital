"use client"
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const FOOTER_LINKS = [
    {
        title: "COMPANY",
        links: [
            { label: "About Us", href: "/about-us" },
            { label: "Payment Method", href: "/payment-option" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "SERVICES",
        links: [
            { label: "Register Domains", href: "#" },
            { label: "Transfer Domains", href: "#" },
            { label: "Manage Domains", href: "#" },
            { label: "Web Hosting", href: "#" },
            { label: "Google Workspace", href: "#" },
        ],
    },
    {
        title: "PRODUCTS",
        links: [
            { label: "NDE Mail", href: "#" },
            { label: "Vision Now", href: "#" },
            { label: "Peoples Now", href: "#" },
            { label: "Spot Now", href: "#" },
            { label: "Marketing Studio", href: "#" },
        ],
    },
    {
        title: "SUPPORT",
        links: [
            { label: "Open Tickets", href: "#" },
            { label: 'Blog', href: '/blog' },
            { label: "Live Chat", href: "#" },
            { label: "Change Management", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const Footer = () => {
    const [expandedSection, setExpandedSection] = useState < number | null > (null);

    const toggleSection = (index: number) => {
        setExpandedSection(prev => (prev === index ? null : index));
    };

    return (
        <div className="relative">
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={IMAGES.footer}
                alt="footer"
            />
            <div className="relative z-10 pt-[140px] max-lg:pt-[200px] ">
                <div className="flex flex-col lg:flex-row justify-between mx-6 lg:mx-24 items-start lg:items-center gap-10 lg:gap-0">
                    <div className="flex flex-col lg:flex-row w-full gap-10 max-lg:gap-2">
                        {FOOTER_LINKS.map((footerLink, i) => (
                            <div key={i} className="flex flex-col gap-4 ">
                                <div className="flex justify-between items-center lg:items-start lg:block">
                                    <span className="text-[17px] font-bold">{footerLink.title}</span>
                                    <Image
                                        src={IMAGES.plus}
                                        alt='plus'
                                        className={`lg:hidden cursor-pointer `}
                                        onClick={() => toggleSection(i)}
                                    />
                                </div>
                                <ul
                                    className={`transition-max-height duration-300 ease-in-out overflow-hidden ${expandedSection === i ? 'max-h-40' : 'max-h-0'
                                        } lg:max-h-full`}
                                >
                                    {footerLink.links.map((link) => (
                                        <li key={link.label} className="text-[15px] text-[#151D8C] py-1">
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-[270px]">
                            <Image src={ICONS.logo} alt='logo' />
                            <p>Now Digital Easy have been the #1 provider of best business solutions from Karur, India, since 2015</p>
                        </div>
                        <div className="flex gap-8 py-2 items-center">
                            <Link href="https://cloud.google.com/find-a-partner/partner/now-digital-easy">
                                <Image src={ICONS.partner} alt={""} />
                            </Link>
                            <Link href="https://www.facebook.com/nowdigitaleasyofficial/reviews">
                                <Image src={ICONS.fbreview} alt={""} className="rounded-[50%]" />
                            </Link>
                            <Link href="https://www.google.com/search?q=now+digital+easy+&sca_esv=1408e98ab1991b60&ei=yZk8ZsXPHcGO4-EPssqWuAU&ved=0ahUKEwiF2OqMo4CGAxVBxzgGHTKlBVcQ4dUDCBA&uact=5&oq=now+digital+easy+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW5vdyBkaWdpdGFsIGVhc3kgMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI9wVQ9wNY9wNwAXgAkAEAmAHtAaAB7QGqAQMyLTG4AQPIAQD4AQGYAgGgAvgBmAMAiAYBkgcDMi0xoAfyAw&sclient=gws-wiz-serp">
                                <Image src={ICONS.googlereview} alt={""} className="rounded-[50%]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mx-6 lg:mx-24 mt-16 max-md:mt-6 flex gap-4 items-center'>
                    <Image src={ICONS.india} alt='india' />
                    <div className='flex gap-2'>
                        <span>- English</span>
                        <Image src={ICONS.drop} alt='' className='rotate-180' />
                    </div>
                    <div className='flex gap-2'>
                        <span>- INR₹</span>
                        <Image src={ICONS.drop} alt='' className='rotate-180' />
                    </div>
                </div>
                <hr className="bg-white h-[2px] mx-6 lg:mx-24 mt-2" />
                <div className="px-4 pt-2 flex flex-col md:flex-row justify-between items-center mx-6 lg:mx-24 gap-6 max-md:gap-0 md:gap-0">
                    <span className="text-[13px] text-center md:text-left text-[#151D8C]">
                        @2022 Nowdigitaleasy, Inc. All Rights Reserved.
                    </span>
                    <div className="flex max-md:flex-col items-center justify-center p-2 pb-4 gap-4">
                        <div>
                            <span className="font-source-sans-pro text-[12px] text-[#151D8C]">
                                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                            </span>
                            <span className="font-source-sans-pro text-[12px] text-[#151D8C]">
                                <Link href={"/usage-terms"}>Terms and Conditions</Link>
                            </span>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={ICONS.facebook} alt='fb' />
                            <Image src={ICONS.insta} alt='fb' />
                            <Image src={ICONS.linkdin} alt='fb' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
