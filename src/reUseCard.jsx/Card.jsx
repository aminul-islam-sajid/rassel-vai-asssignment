import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Card = ({ img, name, rating, price }) => {
    // রেটিং স্টার জেনারেট করার ফাংশন
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
        <div className='h-[400px] w-[295px] '>
            <img className='w-[295px] h-[298px] rounded-2xl bg-[#F0EEED]' src={img} alt="product Img" />
            <h1 className='text-[20px] font-medium mt-2'>{name}</h1>
            <div className='flex gap-1'>{renderStars(rating)}</div>
            <p className='text-2xl font-bold mt-2'>${price}</p>
        </div>
    );
};

export default Card;
