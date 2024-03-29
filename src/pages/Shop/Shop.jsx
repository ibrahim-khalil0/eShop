import React from 'react';

const Shop = () => {
    const brands = ['samsung', 'oppo', 'vivo', 'one plus', 'dell', 'hp', 'walton', 'minister', 'vision']
    return (
        <div className='px-[5%] sm:px-[10%] flex gap-8 bg-white py-16'>
            {/* sidebar start here  */}
            <div className='w-64 bg-[#F5F5F5] py-6 px-4'>
                {/* shop by brand  */}
                <h1 className='mb-4'>By Brands</h1>
                <div className='space-y-3 uppercase text-xs h-48 overflow-y-scroll'>
                    {
                        brands.map(brand => 
                            <div className='flex gap-2 items-center cursor-pointer'>
                                <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white'></div>
                                <h3>{brand}</h3>
                            </div>
                            )
                    }
                </div>
                <hr className='border-t-2 border-t-gray my-8' />

                {/* filter by price  */}
                <div>
                    <h1 className='mb-4'>By Price</h1>
                    <input type="range" min="1" max="10000" class="slider w-full" id="myRange"/>
                    <h4 className='text-sm text-gray-500 mt-2'>Price : BDT 1000</h4>
                </div>
            </div>

            {/* product section  */}
            <div className='bg-[#F5F5F5] flex-1'>
                <h1>this is product area</h1>
            </div>
        </div>
    );
};

export default Shop;