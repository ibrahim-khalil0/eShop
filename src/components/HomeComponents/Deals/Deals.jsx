import React, { useEffect, useState } from 'react';
import ProductCard from '../../../sharedComponents/ProductCard/ProductCard';
import axios from 'axios';

const Deals = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {

        axios('http://localhost:5000/products')
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })

    } ,[])

    return (
        <div>
            <div className='border-b border-b-gray-300 mb-6 pb-3 flex justify-between items-center'>
                <span className='text-lg'>Deals Of The Day</span>
                <span className='text-sm underline'>View All</span>
            </div>

            {/* product card  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
                {
                    products.slice(0, 10).map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default Deals;