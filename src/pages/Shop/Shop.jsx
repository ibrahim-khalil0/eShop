import { FaStar } from "react-icons/fa";
import ProductCard from "../../sharedComponents/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {

        axios('https://brand-shop-server-h455zo8uc-md-ibrahim-khalils-projects.vercel.app/products')
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })

    } ,[])


    const brands = ['samsung', 'oppo', 'vivo', 'one plus', 'dell', 'hp', 'walton', 'minister', 'vision']
    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%] flex flex-col-reverse lg:flex-row gap-8 bg-white pt-8 pb-16 lg:py-16'>
            {/* sidebar start here  */}
            <div className='lg:w-64 bg-[#F5F5F5] py-6 px-4'>
                {/* shop by brand  */}
                <h1 className='mb-4 uppercase'>By Brands</h1>
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
                <hr className='border-t-2 border-t-gray my-6' />

                {/* filter by price  */}
                <div>
                    <h1 className='mb-4 uppercase'>By Price</h1>
                    <input type="range" min="1" max="10000" class="slider w-full" id="myRange"/>
                    <h4 className='text-sm text-gray-500 mt-2'>Price : BDT 1000</h4>
                </div>

                <hr className='border-t-2 border-t-gray my-6' />

                {/* filter by review  */}
                <div className="space-y-3">
                    <h1 className='mb-4 uppercase'>By review</h1>
                    <div className='flex gap-1 items-center cursor-pointer text-xs text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white mr-1'></div>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <span className="ml-1">(12)</span>
                    </div>

                    <div className='flex gap-1 items-center cursor-pointer text-xs text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white mr-1'></div>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar></FaStar>
                        <span className="ml-1">(12)</span>
                    </div>

                    <div className='flex gap-1 items-center cursor-pointer text-xs text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white mr-1'></div>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <span className="ml-1">(12)</span>
                    </div>

                    <div className='flex gap-1 items-center cursor-pointer text-xs text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white mr-1'></div>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <span className="ml-1">(12)</span>
                    </div>

                    <div className='flex gap-1 items-center cursor-pointer text-xs text-gray-500'>
                        <div className='h-4 w-4 border border-gray-400 rounded-sm bg-white mr-1'></div>
                        <FaStar className="text-[#FCB543]"></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <span className="ml-1">(12)</span>
                    </div>
                </div>
                <hr className='border-t-2 border-t-gray my-6' />

            </div>

            {/* product section  */}
            <div className='bg-[#F5F5F5] flex-1 py-6 px-4'>
                <h1 className="uppercase border-b border-b-gray-300">Shop</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 pt-8">
                    {
                        products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;