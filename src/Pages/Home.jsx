import React from 'react';
import NavBar from '../components/navBar';
import Hero from '../components/Hero';
import HeroLogo from '../components/HeroLogo';

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
        </div>

    );
};

export default Home;