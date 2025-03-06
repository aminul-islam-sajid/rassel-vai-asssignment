import React from 'react';
import Images from '../Images/Images';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex justify-center items-center '>
            {/* Footer Main Section */}
            <div className=' max-w-[1200px] mx-auto pt-20 pb-10'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 pb-10 place-items-center'>


                    {/* Logo & Description */}
                    <div className='w-[248px]'>
                        <img src={Images.mainLogo} alt="Brand Logo" />
                        <p className='text-gray-400 py-4'>
                            We have clothes that suit your style and make you feel confident.
                        </p>
                        <div className='flex gap-4 text-xl'>
                            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                            <FaGithub className="hover:text-gray-500 cursor-pointer" />
                        </div>
                    </div>

                    {/* Footer Links */}
                    {["Company", "Support", "Resources", "Legal"].map((title, index) => (
                        <div key={index} className='w-[104px]'>
                            <h1 className='text-xl font-medium'>{title}</h1>
                            <NavLink to="/about" className='block my-2 text-gray-400 hover:text-black'>About</NavLink>
                            <NavLink to="/features" className='block my-2 text-gray-400 hover:text-black'>Features</NavLink>
                            <NavLink to="/works" className='block my-2 text-gray-400 hover:text-black'>Works</NavLink>
                            <NavLink to="/career" className='block my-2 text-gray-400 hover:text-black'>Career</NavLink>
                        </div>
                    ))}

                </div>

                <hr className="h-[1px] bg-gray-400 border-none my-4" />

                {/* Footer Bottom */}
                <div className='flex flex-col md:flex-row justify-between text-gray-500 text-sm'>
                    <p>Aminul Islam Sajid © 2025, All Rights Reserved</p>
                    <div className='flex gap-2'>
                        {[Images.footerLogo, Images.footerLogo1, Images.footerLogo2, Images.footerLogo3, Images.footerLogo4].map((img, idx) => (
                            <img key={idx} src={img} alt={`Footer Logo ${idx + 1}`} className="h-10" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
