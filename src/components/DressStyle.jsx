import React from 'react';
import Images from '../Images/Images';

const DressStyle = () => {
    return (
        <div className='h-[866px] bg-[#F0F0F0] rounded-2xl'>
            <h1 className='text-center pt-20 pb-16 text-5xl font-extrabold'>BROWSE BY DRESS STYLE</h1>
            <div>
                <div className='flex gap-4 p-4 px-14'>
                    <div className="h-72 w-7/12 bg-cover bg-right-top text-4xl p-8 font-bold rounded-2xl"
                        style={{ backgroundImage: `url(${Images.dressStyle1})` }}
                    >Casual </div>
                    <div className="h-72 w-full bg-cover bg-right-top text-4xl p-8 font-bold rounded-2xl"
                        style={{ backgroundImage: `url(${Images.dressStyle2})` }}
                    >Formal </div>

                </div>
                <div className='flex gap-4 px-14'>
                    <div className="h-72 w-full bg-cover bg-right-top text-4xl p-8 font-bold rounded-2xl bg-white"
                        style={{ backgroundImage: `url(${Images.dressStyle3})` }}
                    >Party</div>
                    <div className="h-72 w-7/12 bg-cover bg-right-top text-4xl p-8 font-bold rounded-2xl"
                        style={{ backgroundImage: `url(${Images.dressStyle4})` }}
                    >Gym </div>

                </div>
            </div>
        </div>
    );
};

export default DressStyle;