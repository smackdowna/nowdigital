import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

// Define types for PlanFeature props
interface PlanFeatureProps {
    title: string;
    starterIcon?: string; // Optional prop for Starter plan icon
    advancedIcon?: string; // Optional prop for Advanced plan icon
    premiumIcon?: string; // Optional prop for Premium plan icon
    iconSrc: string; // Prop for the feature image source
}

// Define types for PlanCard props
interface PlanCardProps {
    name: string;
    price: string;
    isStarter?: boolean; // Optional prop
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ title, starterIcon, advancedIcon, premiumIcon, iconSrc }) => (
    <tr className='border-t-[1px] border-black font-roboto-serif'>
        <td className='text-home-heading text-lg lg:text-2xl text-start pl-4 font-400 py-2 lg:py-4'>
            <div className='flex gap-10 px-4'>
                <Image src={iconSrc} alt={title} className='' />
                <span className=''>{title}</span> {/* Use the new image prop */}
            </div>
        </td>
        <td className='text-home-heading text-center bg-[#D7F2FF] py-2 lg:py-4 text-lg lg:text-2xl'>
            <div className='flex justify-center'>
                {starterIcon && <Image src={starterIcon} alt='Starter icon' />}
            </div>
        </td>
        <td className='text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl'>
            <div className='flex justify-center'>
                {advancedIcon && <Image src={advancedIcon} alt='Advanced icon' />}
            </div>
        </td>
        <td className='text-home-heading text-center py-2 lg:py-4 text-lg lg:text-2xl'>
            <div className='flex justify-center'>
                {premiumIcon && <Image src={premiumIcon} alt='Premium icon' />}
            </div>
        </td>
    </tr>
);

const PlanCard: React.FC<PlanCardProps> = ({ name, price, isStarter }) => (
    <th className={`text-center py-2 lg:py-4 ${isStarter ? 'bg-[#D7F2FF]' : ''}`}>
        <div className='flex flex-col gap-2 lg:gap-4'>
            <span className='font-900 text-2xl lg:text-4xl text-home-heading'>{name}</span>
            <span className='font-900'>
                <sup className='text-lg lg:text-xl max-lg:hidden'>₹</sup>
                <span className='text-3xl lg:text-5xl'>{price}</span>/month
            </span>
            <button className='bg-home-primary p-2 text-white text-lg font-900 rounded-lg mx-auto max-md:mx-10'>
                Add to cart
            </button>
        </div>
    </th>
);

const RightPlan: React.FC = () => {
    return (
        <div className='bg-[#B8D4FF] bg-opacity-50'>
            <div className='flex flex-col gap-6 justify-center py-10 lg:py-20'>
                <span className='text-3xl lg:text-6xl font-roboto font-900 text-home-heading text-center'>
                    Find the right plan for your business.
                </span>
                <span className='font-roboto-serif font-400 text-3xl max-md:text-lg text-center'>
                    Choose the Google Workspace edition that best fits your business.
                </span>
            </div>
            <div className='px-4 lg:px-16 pb-10'>
                <div className='bg-white mx-0 lg:mx-14 overflow-x-auto'>
                    <table className='w-full min-w-max rounded-2xl'>
                        <thead>
                            <tr>
                                <th className='w-[600px] max-md:text-lg  text-start bg-white text-home-heading text-xl lg:text-5xl font-roboto font-900 tracking-tight px-10 py-4 lg:py-8'>
                                    Google Workspace Features
                                </th>
                                <PlanCard name="Starter" price="67" isStarter={true} />
                                <PlanCard name="Advanced" price="99" />
                                <PlanCard name="Premium" price="149" />
                            </tr>
                        </thead>
                        <tbody>
                            <PlanFeature
                                title="Get secure and personalised email account for your business"
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Gmail}
                            />
                            <PlanFeature
                                title="Setup HD video with 100 participants to ensure uninterrupted productivity."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.video}
                            />
                            <PlanFeature
                                title="Keep track of important events and share your schedule."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.calendar}
                            />
                            <PlanFeature
                                title="Secure communications tool, built for teams that makes team communication easy and efficient."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.teams}
                            />
                            <PlanFeature
                                title="Generate and work on documents with images, tables, drawings, charts and more"
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Docs}
                            />
                            <PlanFeature
                                title="Get valuable insights via spreadsheet data using formulas, charts, connectors and macros"
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Sheets}
                            />
                            <PlanFeature
                                title="Make stunning presentations using templates, embed videos and images"
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Keeps}
                            />
                            <PlanFeature
                                title="Do engaging, high-quality sites for your project."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Projects}
                            />
                            <PlanFeature
                                title="Create custom forms for surveys and questionnaires."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Forms}
                            />
                            <PlanFeature
                                title="Manage your to-do’s, take notes on the go and never lose track of ideas."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Buld}
                            />
                            <PlanFeature
                                title="Experience interesting conversations, discuss ideas, gather input and keep everyone in your organization engaged."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Buld1}
                            />
                            <PlanFeature
                                title="Basic security and admin controls."
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Admin}
                            />
                            <PlanFeature
                                title="Standard Endpoint device management for account security"
                                starterIcon={ICONS.Check}
                                advancedIcon={ICONS.Check}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Google1}
                            />
                            <PlanFeature
                                title="Smart Search within and outside Google Workspace with Cloud Search."
                                starterIcon={ICONS.Close}
                                advancedIcon={ICONS.Close}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Google2}
                            />
                            <PlanFeature
                                title="Vault for eDiscovery for emails, chats, and files and archiving."
                                starterIcon={ICONS.Close}
                                advancedIcon={ICONS.Close}
                                premiumIcon={ICONS.Check}
                                iconSrc={ICONS.Google3}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RightPlan;
