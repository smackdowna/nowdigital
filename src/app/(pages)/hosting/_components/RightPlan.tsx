import React from 'react';

// Define types for PlanFeature props
interface PlanFeatureProps {
    title: string;
    starter: string;
    advanced: string;
    premium: string;
}

// Define types for PlanCard props
interface PlanCardProps {
    name: string;
    price: string;
    isStarter?: boolean; // Optional prop
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ title, starter, advanced, premium }) => (
    <div className='grid grid-cols-10 items-center border-t-[1px] border-black border-opacity-65 font-roboto-serif'>
        <span className='col-span-4 text-home-heading text-2xl text-start pl-10 font-400 tracking-tight'>{title}</span>
        <span className='col-span-2 font text-home-heading text-center bg-[#D7F2FF] py-4 text-2xl'>{starter}</span>
        <span className='col-span-2 font text-home-heading text-center text-2xl'>{advanced}</span>
        <span className='col-span-2 font text-home-heading text-center text-2xl'>{premium}</span>
    </div>
);

const PlanCard: React.FC<PlanCardProps> = ({ name, price, isStarter }) => (
    <div className={`flex flex-col text-center gap-4 py-4 ${isStarter ? 'bg-[#D7F2FF]' : ''}`}>
        <span className='font-900 text-4xl text-home-heading'>{name}</span>
        <span className='font-900'>
            <sup className='text-xl'>₹</sup>
            <span className='text-5xl'>{price}</span>/month
        </span>
        <button className='bg-home-primary p-4 text-white text-2xl font-900 rounded-lg mx-auto'>Add to cart</button>
    </div>
);

const RightPlan: React.FC = () => {
    return (
        <div className='bg-[#B8D4FF] bg-opacity-50'>
            <div className='flex justify-center'>
                <span className='py-20 text-6xl font-roboto font-900 text-home-heading'>
                    Choose a Right Plan for Your Website
                </span>
            </div>
            <div className='px-16 pb-10'>
                <div className='bg-white mx-14'>
                    <div className='grid grid-cols-10 items-center'>
                        <span className='col-span-4 font-roboto text-home-heading text-center text-5xl  font-900 tracking-tight'>
                            Plan Features
                        </span>
                        <div className='col-span-2'>
                            <PlanCard name="Starter" price="67" isStarter={true} />
                        </div>
                        <div className='col-span-2 mx-10'>
                            <PlanCard name="Advanced" price="99" />
                        </div>
                        <div className='col-span-2'>
                            <PlanCard name="Premium" price="149" />
                        </div>
                    </div>
                </div>
                <div className='bg-white mx-14'>
                    <PlanFeature title="Host Websites" starter="1" advanced="50" premium="100" />
                    <PlanFeature title="SSD Storage (GB)" starter="50GB" advanced="100GB" premium="200GB" />
                    <PlanFeature title="Bandwidth" starter="Unlimited" advanced="Unlimited" premium="Unlimited" />
                    <PlanFeature title="Free .IN Domain (1st Year Only)" starter="1" advanced="" premium="1" />
                    <PlanFeature title="Subdomains" starter="5" advanced="100" premium="200" />
                    <PlanFeature title="FTP Users" starter="1" advanced="50" premium="100" />
                    <PlanFeature title="eMail Accounts" starter="2" advanced="50" premium="100" />
                    <PlanFeature title="Individual Mailbox Size (GB)" starter="1" advanced="1" premium="1" />
                    <PlanFeature title="Overall Mailbox Size (GB)" starter="2" advanced="50" premium="100" />
                    <PlanFeature title="Email Per Hour" starter="100" advanced="100" premium="100" />
                    <PlanFeature title="Email forwarding accounts" starter="Unlimited" advanced="Unlimited" premium="Unlimited" />
                    <PlanFeature title="FTP Users" starter="Unlimited" advanced="Unlimited" premium="Unlimited" />
                </div>
            </div>
        </div>
    );
}

export default RightPlan;
