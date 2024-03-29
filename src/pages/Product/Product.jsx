import React, { useEffect } from 'react';
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const Product = () => {

    const features = [
        'Unrestrained and portable active stereo speaker',
        'Free from the confines of wires and chords',
        '20 hours of portable capabilities',
        'Unrestrained and portable active stereo speaker',
        'Free from the confines of wires and chords',
        '20 hours of portable capabilities'
    ]

    const ratings = 4
    useEffect(() => {
        const totalStars = document.querySelectorAll(`.rating > span:nth-child(-n+${ratings})`);
        totalStars.forEach(star => {
          star.classList.add('text-[#FCB543]');
        });

      }, []);

    return (
        <div className='pt-8 pb-10'>
            {/* product header area  */}
            <div className='border-b border-b-gray-300 pb-3 space-y-2 px-[5%] sm:px-[7%] lg:px-[10%]'>
                <h2 className='text-lg'>Ladies Bag For Women Stylist Cute Look Bag</h2>
                <div className='text-xs text-gray-500 flex'>
                    <div className='pr-3'>
                        <p className='capitalize'>brand: <span className='text-[#FCB543]'>samsung</span></p>
                    </div>
                    
                    <div className="flex rating items-center px-3 border-x border-x-gray-400">
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span className="ml-2">( 37 Reviews )</span>
                    </div>
                    
                    <div className='pl-3'>
                        <p>Store: New Fashion</p>
                    </div>
                </div>
            </div>

            {/* product details area  */}
            <div className='pt-5 bg-white px-[5%] sm:px-[7%] lg:px-[10%] flex gap-10'>
                {/* product image  */}
                <div className='flex gap-4'>
                    <div className='space-y-2 w-14'>
                        <img src="https://i.ibb.co/tDdDDvP/5.jpg" alt="" className='w-14 h-14 border border-gray-200' />
                        <img src="https://i.ibb.co/x6BCctW/5a.jpg" alt="" className='w-14 h-14 border border-gray-200' />
                        <img src="https://i.ibb.co/tDdDDvP/5.jpg" alt="" className='w-14 h-14 border border-gray-200' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/tDdDDvP/5.jpg" alt="" className='w-[300px] h-[350px]' />
                    </div>
                </div>

                {/* product details  */}
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='text-[#FF3300] text-xl mr-2'>৳1000</h3>
                        <h4 className='text-gray-500 text-xs'><del>৳2000</del></h4>
                        <h4 className='text-[#FF3300] text-xs'>( -50% )</h4>
                    </div>
                    <div className='text-sm pt-1'>
                        <span>Status : </span> <span className='text-[#FCB543]'>In Stock</span>
                    </div>
                    <div className='space-y-2 border-y border-y-gray-300 py-5 mt-4'>
                        {
                            features.map(feature => 
                                <div className='flex items-center text-sm text-gray-500 gap-2'>
                                    <div className='w-1 h-1 rounded-full bg-gray-500'></div>
                                    <h3>{feature}</h3>
                                </div>
                                )
                        }
                    </div>

                    <div className='flex gap-5 py-5 border-b border-b-gray-300 items-center'>
                        <div>
                            <h6 className='text-xs text-gray-500'>Quantity</h6>
                            <div className='border border-gray-400 text-center flex gap-4 px-4 py-1'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                        <div>
                            <button className='text-lg bg-[#FCB543] text-white px-10 py-[10px] rounded-sm'>Add to cart</button>
                        </div>
                        <div className='text-2xl'>
                            <CiHeart></CiHeart>
                        </div>
                    </div>
                    <div className='text-sm py-5'>
                        <span>Category : </span> <span className='text-[#FCB543]'>Electronics</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;