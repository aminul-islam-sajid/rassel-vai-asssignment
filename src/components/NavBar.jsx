import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Images from '../Images/Images';

const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0">
                        <img src={Images.mainLogo} alt="Logo" className="h-[22px] w-[160px]" />
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-2xl text-gray-700" />
                            ) : (
                                <FaBars className="text-2xl text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Menu Items (Hidden on Mobile) */}
                    <div className="hidden md:flex space-x-6 items-center">

                        {/* Home with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                            >
                                <span className='flex items-center'>
                                    Shop <img className='w-[11px] h-[6px] hover:text-blue-600 ml-2' src={Images.arrow} alt="" />
                                </span>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                                    <NavLink to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</NavLink>
                                    <NavLink to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</NavLink>
                                    <NavLink to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</NavLink>
                                </div>
                            )}
                        </div>

                        {/* Others Menu Links */}
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">
                            On Sale
                        </NavLink>
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">
                            New Arrivals
                        </NavLink>
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">
                            Brands
                        </NavLink>
                    </div>

                    {/* Search Bar (Hidden on Mobile) */}
                    <div className="relative hidden md:block w-[300px] lg:w-[400px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-[#F0F0F0] py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                    </div>

                    {/* Cart & Shop Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/" className="text-gray-800 hover:text-blue-600 text-2xl">
                            <img src={Images.cart} alt="Cart" className="w-6 h-6" />
                        </NavLink>
                        <NavLink to="/" className="text-gray-800 hover:text-blue-600 text-2xl relative">
                            <img src={Images.shop} alt="Shop" className="w-6 h-6" />
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white py-4 shadow-lg">
                    <div className="flex flex-col space-y-4 px-4">
                        <NavLink to="/" className="text-gray-800 hover:text-blue-600">Home</NavLink>
                        <NavLink to="/about" className="text-gray-800 hover:text-blue-600">About</NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:text-blue-600">Contact</NavLink>
                        <NavLink to="/blog" className="text-gray-800 hover:text-blue-600">Blog</NavLink>
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">On Sale</NavLink>
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">New Arrivals</NavLink>
                        <NavLink to="/shop" className="text-gray-800 hover:text-blue-600">Brands</NavLink>

                        {/* Search Bar in Mobile */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-[#F0F0F0] py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                        </div>

                        {/* Cart & Shop Icons */}
                        <div className="flex items-center space-x-4 justify-center mt-2">
                            <NavLink to="/" className="text-gray-800 hover:text-blue-600 text-2xl">
                                <img src={Images.cart} alt="Cart" className="w-6 h-6" />
                            </NavLink>
                            <NavLink to="/" className="text-gray-800 hover:text-blue-600 text-2xl relative">
                                <img src={Images.shop} alt="Shop" className="w-6 h-6" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
