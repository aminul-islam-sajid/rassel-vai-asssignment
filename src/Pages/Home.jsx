import React from 'react';
import Hero from '../components/Hero';
import HeroLogo from '../components/HeroLogo';
import NewProduct from '../components/NewProduct';
import TopSelling from '../components/TopSelling';
import DressStyle from '../components/DressStyle';
import CustomerRatings from '../components/CustomerRatings';
import SubscribeSection from '../components/SubscribeSection';

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
                <SubscribeSection />
            </div>
        </div>

    );
};

export default Home;