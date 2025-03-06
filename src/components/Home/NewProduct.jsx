import React from 'react';
import Images from '../../Images/Images'
import Card from '../../reUseCard/Card';

const NewProduct = () => {
    return (
        <div>
            <h1 className='text-center text-5xl my-16 font-extrabold'>NEW ARRIVALS</h1>
            <div className='flex items-center justify-center gap-4'>
                <Card img={Images.T_shirt} name={'T-SHIRT WITH TAPE DETAILS'} rating={4.0} price={"24.98"} />
                <Card img={Images.JEANS} name={'SKINNY FIT JEANS'} rating={4.5} price={"14.98"} />
                <Card img={Images.Check_SHIRT} name={'SKINNY FIT JEANS'} rating={3.0} price={"18.98"} />
                <Card img={Images.T_shirt2} name={'SKINNY FIT JEANS'} rating={3.5} price={"34.98"} />
            </div>
            <button className='text-black text-center rounded-full py-1 px-10 border  flex justify-center m-auto cursor-pointer my-14'>View All</button>
            <hr className="h-[1px] bg-gray-400 border-none my-4" />

        </div>
    );
};

export default NewProduct;