import React from 'react';
import Images from '../Images/Images';

const HeroLogo = () => {
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto py-10'>
            <img src={Images.Logo1} alt="" />
            <img src={Images.Logo2} alt="" />
            <img src={Images.Logo3} alt="" />
            <img src={Images.Logo4} alt="" />
        </div>
    );
};

export default HeroLogo;