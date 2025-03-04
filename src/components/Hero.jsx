import React from 'react';
import Images from '../Images/Images';

const Hero = () => {
    return (
        <div className='flex max-w-[1200px] mx-auto flex-wrap h-[663px] items-center overflow-hidden'>

            {/* Left Text Section */}
            <div className='w-1/2'>
                <h1 className="text-6xl font-extrabold text-black">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="mt-4 text-gray-600">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className='bg-black text-white my-10 py-2 px-10 rounded-4xl'>Shop Now</button>
                <div className='flex gap-10'>
                    <div>
                        <h1 className='text-4xl font-bold'>200+</h1>
                        <p className='text-gray-600'>International Brands</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>2,000+</h1>
                        <p className='text-gray-600'>High-Quality Products</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>30,000+</h1>
                        <p className='text-gray-600'>Happy Customers</p>
                    </div>
                </div>
            </div>
            {/* Right Image Section */}
            <div className='flex w-1/2 items-center gap-6 relative '>

                {/* Left Little Logo */}
                <div className=" flex items-center absolute ">
                    <img className='w-14 h-14 -mt-[80px] ml-[30px]' src={Images.heroLogo2} alt="Hero Logo 2" />
                </div>

                {/* Main Image Section (Image 1 on top of Image 2) */}
                <div className="static  h-[772px]  flex items-center ">
                    <img className="w-[587px] h-screen pl-40 " src={Images.heroImg2} alt="Hero Image 2" />
                    <img className="absolute  w-auto h-screen pr-40" src={Images.heroImg1} alt="Hero Image 1" />
                </div>

                {/* Right Little Logo */}
                <div className=" flex items-center absolute ">
                    <img className='w-24 h-24 -mt-[300px] ml-[480px]' src={Images.heroLogo2} alt="Hero Logo 2" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
