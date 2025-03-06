import React from 'react';
import { FaVoicemail } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const SubscribeSection = () => {
    return (
        <div className=' h-[180px] w-full flex justify-center items-center bg-black text-white mt-20 rounded-2xl -mb-10 '>
            <h1 className='text-4xl font-bold px-28'>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <div className='pe-28'>
                <div className="relative hidden md:block w-[300px] lg:w-[400px] mb-4">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="w-full bg-[#F0F0F0] py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <GoMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>
                <input
                    type="text"
                    placeholder="Subscribe to Newsletter"
                    className="w-full bg-white py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-center"
                />
            </div>
        </div>
    );
};

export default SubscribeSection;