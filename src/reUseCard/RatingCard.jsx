import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { GoCheck } from 'react-icons/go';

const RatingCard = ({ rating, name, text }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i - 0.5 === rating) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };
    return (
        <div className='w-[400px] h-[240px] border border-gray-400 rounded-2xl p-8'>
            <div className='flex gap-1'>{renderStars(rating)}</div>
            <h1 className='text-[20px] font-medium mt-2 flex items-center'>{name}<GoCheck className='bg-[#01AB31] text-white text-sm justify-center rounded-full' /></h1>
            <p className='text-gray-400'>{text}</p>
        </div>
    );
};

export default RatingCard;