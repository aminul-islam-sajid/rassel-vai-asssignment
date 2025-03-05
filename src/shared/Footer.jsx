import React from 'react';
import Images from '../Images/Images';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' max-w-[1200px] mx-auto pt-20 pb-10'>
            <div className='flex items-center justify-between m-0 pb-10'>
                <div className='w-[248px]'>
                    <img src={Images.mainLogo} alt="" />
                    <p className='text-gray-400 py-4'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex gap-4'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaGithub />
                    </div>
                </div>
                <div className='w-[104px] '>
                    <h1 className='text-xl font-medium'>Company</h1>
                    <p className='my-4'>About</p>
                    <p>Features</p>
                    <p className='my-4'>Works</p>
                    <p>Career</p>
                </div>
                <div className='w-[104px] '>
                    <h1 className='text-xl font-medium'>Company</h1>
                    <p className='my-4'>About</p>
                    <p>Features</p>
                    <p className='my-4'>Works</p>
                    <p>Career</p>
                </div>
                <div className='w-[104px] '>
                    <h1 className='text-xl font-medium'>Company</h1>
                    <p className='my-4'>About</p>
                    <p>Features</p>
                    <p className='my-4'>Works</p>
                    <p>Career</p>
                </div>
                <div className='w-[104px] '>
                    <h1 className='text-xl font-medium'>Company</h1>
                    <p className='my-4'>About</p>
                    <p>Features</p>
                    <p className='my-4'>Works</p>
                    <p>Career</p>
                </div>
            </div>
            <hr className="h-[1px] bg-gray-400 border-none my-4" />
            <div className='flex justify-between'>
                <p>Aminul islam sajid © 2025, All Rights Reserved</p>
                <div className='flex items-center justify-center m-0 gap-1'>
                    <img src={Images.footerLogo} alt="" />
                    <img src={Images.footerLogo1} alt="" />
                    <img src={Images.footerLogo2} alt="" />
                    <img src={Images.footerLogo3} alt="" />
                    <img src={Images.footerLogo4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;