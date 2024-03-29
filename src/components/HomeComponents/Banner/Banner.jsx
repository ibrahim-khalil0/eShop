import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/qY1v2nd/banner.jpg)'}} className='bg-center bg-cover'>
            <div className='px-[5%] sm:px-[10%] bg-[#00000099] text-white flex justify-between gap-10'>
                <div className='md:w-3/5 space-y-5 py-20'>
                    <span className='bg-white text-black px-5 py-2 rounded-md font-bold text-lg'>e-Shop</span>
                    <h1 className='text-3xl lg:text-4xl font-semibold'>Discover Your Perfect Find Shop the Latest Trends & Deals!</h1>
                    <p>Explore endless possibilities with us. Find everything you need, from fashion to gadgets, all in one place. Start your shopping journey now!</p>
                    <button className='bg-white text-black px-5 py-2 rounded-md font-bold text-lg'>Shop Now</button>
                </div>
                <div className='flex-1 relative hidden md:block'>
                    <img src="https://i.ibb.co/BK9rTL5/shop-removebg-preview.png" className='absolute bottom-0 right-0 h-[430px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;