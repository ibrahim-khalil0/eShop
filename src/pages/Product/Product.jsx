import React, { useEffect, useState } from 'react';
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import ProductCard from '../../sharedComponents/ProductCard/ProductCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Product = () => {

    // product details 
    const [product, setProduct] = useState({})
    const {name, brand, category,  review, storeName, regularPrice, discountPrice, features, description, ratings, status, image } = product
    const {id} = useParams()

    const discount = regularPrice - discountPrice
    const discountPercent = (discount / regularPrice) * 100

    useEffect( () => {

        axios(`http://localhost:5000/products?id=${id}`)
        .then(res => {
            setProduct(res.data)
            setManiImg(res.data.image[0])
        })
    } ,[])


        // similar products
    const [products, setProducts] = useState([])
    useEffect( () => {

        axios(`http://localhost:5000/product/Fashion`)
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })

    } ,[])

    useEffect(() => {
        const totalStars = document.querySelectorAll(`.rating > span:nth-child(-n+${ratings ? ratings : 0})`);
        totalStars.forEach(star => {
          star.classList.add('text-[#FCB543]');
        });

      }, []);


      const [mainImg, setManiImg] = useState('')

    return (
        <div className='pt-8 pb-10'>
            {/* product header area  */}
            <div className='border-b border-b-gray-300 pb-3 space-y-2 px-[5%] sm:px-[7%] lg:px-[10%]'>
                <h2 className='text-lg'>{name}</h2>
                <div className='text-xs text-gray-500 flex'>
                    <div className='pr-3'>
                        <p className='capitalize'>brand: <span className='text-[#FCB543]'>{brand}</span></p>
                    </div>
                    
                    <div className="flex rating items-center px-3 border-x border-x-gray-400">
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span><FaStar></FaStar></span>
                        <span className="ml-2">( {review} )</span>
                    </div>
                    
                    <div className='pl-3'>
                        <p>Store: {storeName}</p>
                    </div>
                </div>
            </div>

            {/* product details area  */}
            <div className='pt-5 bg-white px-[5%] sm:px-[7%] lg:px-[10%] flex flex-col md:flex-row gap-10'>
                {/* product image  */}
                <div className='flex gap-4'>
                    <div className='space-y-2 w-20 md:w-14'>
                        {
                            image && image.map(img => <img onClick={() => setManiImg(img)} src={img} alt="" className='w-full h-20 lg:h-16 border border-gray-200' />)
                        }
                    </div>
                    <div className='flex-1'>
                        <img src={mainImg} alt="" className='md:w-[300px] md:h-[350px] w-full' />
                    </div>
                </div>
 
                {/* product details  */}
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='text-[#FF3300] text-xl mr-2'>৳{regularPrice}</h3>
                        <h4 className='text-gray-500 text-xs'><del>৳{discountPrice}</del></h4>
                        <h4 className='text-[#FF3300] text-xs'>( -{discountPercent} )</h4>
                    </div>
                    <div className='text-sm pt-1'>
                        <span>Status : </span> <span className='text-[#FCB543]'>{status ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <div className='space-y-2 border-y border-y-gray-300 py-5 mt-4'>
                        {
                            features && features.map(feature => 
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
                        <span>Category : </span> <span className='text-[#FCB543]'>{category}</span>
                    </div>
                </div>
            </div>

            {/* product description  */}
            <div className='px-[5%] sm:px-[7%] lg:px-[10%] pt-10'>
                <h1 className='font-bold text-lg'>Description</h1>
                {
                    description && description.map(des => <p className='text-sm mt-5 text-gray-500 tracking-wide leading-6'>{des}</p>)
                }
            </div>

            {/* similer products  */}
            <div className='px-[5%] sm:px-[7%] lg:px-[10%] pt-10'>
                <h1 className='font-bold text-lg bg-white py-3 rounded-sm text-center'>Related Product</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-8'>
                    {
                        products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;