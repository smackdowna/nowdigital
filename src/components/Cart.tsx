import React, { useState } from 'react';
import Image from 'next/image';
import { CART } from '@/assets';

type SidebarProps = {
    onClick: () => void;
};

// Step 1: SummaryPage Component
const SummaryPage = () => (
    <table className="table-auto p-4 bg-white rounded-lg shadow">
        <thead>
            <tr>
                <th className="font-bold border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                    Product
                </th>
                <th className="font-bold border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                    Duration
                </th>
                <th className="font-bold border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.google} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">Google Workspace</h3>
                            <a href="#" className="text-blue-500 text-sm">thedesignerclub.com</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex items-center space-x-4">
                        {/* <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>3000</option>
            </select> */}
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>Annually</option>
                        </select>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                        <button className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.database} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">Linux Hosting</h3>
                            <a href="#" className="text-blue-500 text-sm">iaaxin.com</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex items-center space-x-4">
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>Annually</option>
                        </select>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                        <button className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.www} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">uinstitute.in</h3>
                            <a href="#" className="text-blue-500 text-sm">.IN Domain Registration</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex items-center space-x-4">
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>Annually</option>
                        </select>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                        <button className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="">
                        <a href="#" className="text-blue-500 underline">Have a Coupon Code?</a>
                    </div>
                </td>
                <td></td>
                <td className="border-b-2">
                    <div className="flex flex-row justify-end">
                        <div>
                            <p className="font-semibold">Subtotal</p>
                        </div>
                        <div>
                            <p className="font-semibold">Tax</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <p className="font-semibold">₹1600.00</p>
                        </div>

                        <div>
                            <p className="font-semibold">₹80.00</p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className="flex justify-end border-t mt-2 pt-2">
                        <p className="font-bold text-lg">Total</p>
                    </div>
                </td>
                <td className="border-b-2">
                    <div className="flex justify-end border-t mt-2 pt-2">
                        <p className="font-bold text-lg">₹1600.00</p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
);

// Step 2: LoginPage Component
const LoginPage = () => (
    <div className="w-[299px] h-[312px] relative">
        <div className="w-[166px] left-0 top-0 absolute text-black text-[17px] font-bold font-['Source Sans Pro'] capitalize leading-snug">Existing User?</div>
        <div className="w-[299px] h-[166px] left-0 top-[55px] absolute">
            <div className="w-[46px] left-0 top-0 absolute text-[#313131] text-[15px] font-normal font-['Source Sans Pro'] leading-7">Email</div>
            <div className="w-[299px] h-10 left-0 top-[28px] absolute">
                <div className="w-[5.22px] h-[22.40px] left-[13.91px] top-[7px] absolute text-black text-base font-normal font-['Martel Sans'] leading-7">|</div>
            </div>
            <div className="w-[73.31px] left-0 top-[78px] absolute text-[#313131] text-[15px] font-normal font-['Source Sans Pro'] leading-7">Password</div>
            <div className="w-[299px] h-10 left-0 top-[106px] absolute">
                <div className="w-20 left-[14px] top-[12px] absolute text-[#646464]/50 text-base font-normal font-['Source Sans Pro'] leading-none">Placeholder</div>
            </div>
            <div className="w-[146px] left-[153px] top-[152px] absolute text-right text-[#0a41fc] text-sm font-normal font-['Martel Sans'] underline leading-[14px]">Forget Password</div>
        </div>
        <div className="left-[31px] top-[293px] absolute text-center"><span className="text-black text-[15px] font-normal font-['Source Sans Pro']">New to NowDigitalEasy? </span><span className="text-[#0437cd] text-[15px] font-bold font-['Source Sans Pro'] underline">Sign up here</span></div>
        <div className="w-[296px] left-0 top-[26px] absolute text-black text-[13px] font-normal font-['Source Sans Pro'] leading-[15px]">Please sign in with your credentials below to continue.</div>
        <div className="w-[215px] h-10 left-[42px] top-[241px] absolute bg-[#0a41fc] rounded shadow">
            <div className="w-11 left-[86px] top-[14px] absolute text-white text-sm font-bold font-['Martel Sans'] leading-[14px]">Log In</div>
        </div>
    </div>
);

// Step 3: PaymentPage Component
const PaymentPage = () => (
    <table className="table-auto p-4 bg-white rounded-lg shadow">
        <tbody>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.google} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">Google Workspace</h3>
                            <a href="#" className="text-blue-500 text-sm">thedesignerclub.com</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.database} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">Linux Hosting</h3>
                            <a href="#" className="text-blue-500 text-sm">iaaxin.com</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex items-center space-x-4">
                        <Image src={CART.www} alt="Google Workspace" className="w-12 h-12" />
                        <div>
                            <h3 className="font-semibold">uinstitute.in</h3>
                            <a href="#" className="text-blue-500 text-sm">.IN Domain Registration</a>
                        </div>
                    </div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className='flex'>
                        <p className="font-semibold p-4">₹225.00</p>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Subtotal</p>
                        </div>
                        <div>
                            <p className="font-semibold">₹1600.00</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Tax</p>
                        </div>
                        <div>
                            <p className="font-semibold">₹80.00</p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className="flex justify-end border-t mt-2 pt-2">
                        <p className="font-bold text-lg">Total</p>
                    </div>
                </td>
                <td className="border-b-2">
                    <div className="flex justify-end border-t mt-2 pt-2">
                        <p className="font-bold text-lg">₹1600.00</p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
);

const Registration=()=>(
    <div></div>
);

const Cart: React.FC<SidebarProps> = ({ onClick }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, name: 'Summary' },
        { id: 2, name: 'Login' },
        { id: 3, name: 'Payment' },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleClose = () => {
        console.log('Stepper closed');
    };

    // Function to render the content based on the current step
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <SummaryPage />;
            case 2:
                return <LoginPage />;
                // return <Registration/>
            case 3:
                return <PaymentPage />;
            default:
                return <SummaryPage />;
        }
    };

    return (
        <div className="w-fit ml-auto p-4 bg-white shadow-lg hs-overlay fixed inset-0 z-50 block">
            {/* Header */}
            <div style={{ backgroundImage: 'linear-gradient(90.37deg,#d2d5fd .32%,#d8daf8 22.3%,#efe8e7 49.57%,#fef3e2 99.68%)' }}>
                <div className="mx-4 p-4">
                    <div className="flex justify-between items-center mb-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center relative">
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= step.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                                        }`}
                                >
                                    {step.id}
                                </div>
                                <div
                                    className={`absolute top-0 -ml-10 text-center mt-10 w-32 font-semibold ${currentStep >= step.id ? 'text-blue-500' : 'text-gray-500'
                                        }`}
                                >
                                    {step.name}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${currentStep > step.id ? 'border-blue-500' : 'border-gray-300'}`}></div>
                                )}
                            </div>
                        ))}
                        <div className="flex items-center text-gray-500 relative">
                            <button className="text-2xl" onClick={onClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="font-bold bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step Content */}
            <div className="p-4">
                {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-between mt-4">
                {currentStep > 1 && (
                    <button onClick={handlePrev} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                        Previous
                    </button>
                )}
                <button onClick={handleNext} className="ml-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    {currentStep === steps.length ? 'Finish' : 'Next'}
                </button>
            </div> */}
            <button onClick={handleNext} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Continue to Cart
            </button>
        </div>
    );
};

export default Cart;
