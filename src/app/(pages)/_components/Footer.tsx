import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
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
    return (
        <div className="relative max-h-[500px]">
            <Image
                className="absolute inset-0 w-full h-full object-contain lg:object-cover z-0 object-top"
                src={IMAGES.footer}
                alt={"footer"}
            />
            <div className="relative z-10 max-md:mt-10">
                <div className="flex max-lg:flex-col justify-between mx-24 items-start pt-[120px] max-lg:gap-10">
                    <div className="flex flex-col lg:flex-row md:mt-0 gap-[80px]">
                        {FOOTER_LINKS.map((footerLink, i) => (
                            <ul key={i} className="md:flex hidden flex-col max-lg:flex-row max-lg:justify-between gap-4 py-1 text-[13px] text-[#151D8C] max-lg:w-full">
                                <span className="text-[17px] leading-[19.92px] font-900">{footerLink.title}</span>
                                <div className='text-[18px] flex flex-col gap-3 font-serif max-lg:hidden'>
                                    {footerLink.links.map((link) => (
                                        <div key={link.label}>
                                            <li className='text-[15px] font-serif'>
                                                <Link href={link.href}>{link.label}</Link>
                                            </li>
                                        </div>
                                    ))}
                                </div>
                                <Image src={IMAGES.plus} alt='awd' className='lg:hidden' />
                            </ul>
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        <div className='w-[270px]'>
                            <Image src={ICONS.logo} alt='logo' />
                            <span className='w-[100px]'>Now Digital Easy have been the #1 provider of best business solutions from Karur, India, since 2015</span>
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
                <div className='mx-24 mt-16 flex gap-4 items-center'>
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
                <hr className="bg-white h-[2px] mx-24 mt-2" />
                <div className="px-4 py-4 flex max-md:flex-col max-md:gap-6 justify-between mx-24">
                    <span className="text-[13px] max-md:text-[10px] text-center md:text-left text-[#151D8C]">
                        @2022 Nowdigitaleasy, Inc. All Rights Reserved.
                    </span>
                    <div className="flex gap-2 items-center justify-center">
                        <span className="font-source-sans-pro text-[13px] max-md:text-[9px] text-[#151D8C]">
                            <Link href={"/privacy-policy"}>Privacy Policy</Link>
                        </span>
                        <span className="font-source-sans-pro text-[13px] max-md:text-[9px] text-[#151D8C]">
                            <Link href={"/usage-terms"}>Terms and Conditions</Link>
                        </span>
                        <Image src={ICONS.facebook} alt='fb' />
                        <Image src={ICONS.insta} alt='fb' />
                        <Image src={ICONS.linkdin} alt='fb' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
