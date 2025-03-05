import React from 'react';
import RatingCard from '../reUseCard.jsx/RatingCard';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const CustomerRatings = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-20 mb-10'>
                <h1 className='text-5xl font-extrabold'>OUR HAPPY CUSTOMERS</h1>
                <div className='flex text-4xl gap-4 '>
                    <GoArrowLeft className='cursor-pointer' />
                    <GoArrowRight className='cursor-pointer' />
                </div>
            </div>
            <div className='flex gap-6'>
                <RatingCard name={'Sarah M.'} rating={4.5} text={` "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.” `} />
                <RatingCard name={'Sarah M.'} rating={4.5} text={` "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.” `} />
                <RatingCard name={'Sarah M.'} rating={4.5} text={` "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.” `} />
            </div>
        </div>
    );
};

export default CustomerRatings;