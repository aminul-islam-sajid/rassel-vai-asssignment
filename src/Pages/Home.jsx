import React from 'react';
import HeroLogo from '../components/Home/HeroLogo';
import Hero from '../components/Home/Hero';
import NewProduct from '../components/Home/NewProduct';
import TopSelling from '../components/Home/TopSelling';
import DressStyle from '../components/Home/DressStyle';
import CustomerRatings from '../components/Home/CustomerRatings';
import SubscribeSection from '../components/Home/SubscribeSection';


const Home = () => {
    return (
        <div>
            <div className='bg-[#F2F0F1]'>
                <Hero />
            </div>
            <div className='bg-black'>
                <HeroLogo />
            </div>
            <div className="max-w-[1200px] mx-auto">
                <NewProduct />
                <TopSelling />
                <DressStyle />
                <CustomerRatings />
            </div>
            <div className='relative max-w-[1200px] mx-auto '>
                <SubscribeSection />
            </div>

        </div>

    );
};

export default Home;