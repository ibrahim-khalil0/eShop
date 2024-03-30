import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    const {name, regularPrice, discountPrice, ratings, review, image, _id} = product
    
    const discount = regularPrice - discountPrice
    const discountPercent = (discount / regularPrice) * 100


    useEffect(() => {
        const totalStars = document.querySelectorAll(`.rating > span:nth-child(-n+${ratings})`);
        totalStars.forEach(star => {
          star.classList.add('text-[#FCB543]');
        });

      }, []);


    return (
        <Link to={`/product/${_id}`} className="bg-white cursor-pointer hover:shadow-lg shadow-gray-300 hover:-top-2 relative">
            <div>
                <img src={image[0]} alt="" className='h-44 w-full' />
            </div>
            <div className='px-3 pt-2 pb-5 space-y-1'>
                <h5 className='text-sm'>{name}</h5>
                <h4 className='text-[#FCB543] '>৳{regularPrice}</h4>
                <div>
                <div className='text-xs'>
                    <span className='text-gray-500'><del>৳{discountPrice}</del></span>
                    <span> -{discountPercent}</span>
                </div>
                </div>
                <div className="flex text-gray-400 rating items-center text-xs">
                    <span><FaStar></FaStar></span>
                    <span><FaStar></FaStar></span>
                    <span><FaStar></FaStar></span>
                    <span><FaStar></FaStar></span>
                    <span><FaStar></FaStar></span>
                    <span className="ml-2">({review})</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;