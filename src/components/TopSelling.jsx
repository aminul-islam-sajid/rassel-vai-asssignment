import React from 'react';
import Card from '../reUseCard.jsx/Card';
import Images from '../Images/Images';

const TopSelling = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-5xl mt-16 mb-20 font-extrabold'>TOP SELLING</h1>
                <div className='flex items-center justify-center gap-4'>
                    <Card img={Images.Shorts} name={'T-SHIRT WITH TAPE DETAILS'} rating={2.0} price={"24.98"} />
                    <Card img={Images.JEANS2} name={'SKINNY FIT JEANS'} rating={5.0} price={"14.98"} />
                    <Card img={Images.Check_SHIRT2} name={'SKINNY FIT JEANS'} rating={3.5} price={"18.98"} />
                    <Card img={Images.T_shirt3} name={'SKINNY FIT JEANS'} rating={4.5} price={"34.98"} />
                </div>
                <button className='text-black text-center rounded-full py-1 px-10 border  flex justify-center m-auto cursor-pointer mt-10 mb-14'>View All</button>
            </div>
        </div>
    );
};

export default TopSelling;