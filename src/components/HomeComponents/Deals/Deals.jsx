import React from 'react';
import ProductCard from '../../../sharedComponents/ProductCard/ProductCard';

const Deals = () => {
    return (
        <div>
            <div className='border-b border-b-gray-300 mb-6 pb-3 flex justify-between items-center'>
                <span className='text-lg'>Deals Of The Day</span>
                <span className='text-sm underline'>View All</span>
            </div>

            {/* product card  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>

        </div>
    );
};

export default Deals;