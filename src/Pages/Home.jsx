import React from 'react';
import NavBar from '../components/navBar';
import Hero from '../components/Hero';
import HeroLogo from '../components/HeroLogo';
import NewProduct from '../components/NewProduct';
import TopSelling from '../components/TopSelling';
import DressStyle from '../components/DressStyle';
import CustomerRatings from '../components/CustomerRatings';

const Home = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto">
                <NavBar />
            </div>
            <div className='bg-[#F2F0F1]'>
                <Hero />
            </div>
            <div className='bg-black'>
                <HeroLogo />
            </div>
            <div className="max-w-[1200px] mx-auto">
                <NewProduct />
            </div>
            <div className="max-w-[1200px] mx-auto">
                <TopSelling />
            </div>
            <div className="max-w-[1200px] mx-auto">
                <DressStyle />
                <CustomerRatings />
            </div>

        </div>

    );
};

export default Home;