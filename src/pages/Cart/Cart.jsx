import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {

    const {user} = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [refetch, setRefetch] = useState(1)

    const location = useLocation()

    useEffect( () => {
        axios(`https://brand-shop-server-h455zo8uc-md-ibrahim-khalils-projects.vercel.app/carts/${user?.email}`)
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
    }, [user?.email, refetch])

    // remove product from cart 

    const handleRemove = (id) => {
        axios.delete(`https://brand-shop-server-h455zo8uc-md-ibrahim-khalils-projects.vercel.app/remove/${id}`)
        .then(res => {
           setRefetch(refetch + 1)
        })
    }


    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%]'>
            <h1 className='py-20 text-center text-5xl font-bold'> My Cart</h1>

            <div>
                <div className="md:grid hidden md:grid-cols-9 gap-2 bg-white px-5 py-2 font-bold text-sm">
                    <div>Image</div>
                    <div className="col-span-3">Product</div>
                    <div className="text-center">Price</div>
                    <div className="text-center col-span-2">Quantity</div>
                    <div className="text-center">Total</div>
                    <div className="text-right">Remove</div>
                </div>
                {
                    products.map((product, idx) => 
                        <div key={idx} className="md:grid grid-cols-1 md:grid-cols-9 gap-2 px-5 py-5 text-sm border-b border-b-gray-300">
                            <div>
                                <img src={product.image[0]} alt="" className="w-16" />
                            </div>
                            <div className="col-span-3 py-3 md:py-0">{product.name}</div>
                            <div className="md:text-center"><span className="md:hidden">Price: </span>৳{product.discountPrice}</div>
                            <div className="text-center col-span-2 py-3 md:py-0">
                                <div className='border border-gray-400 text-center flex gap-4 px-4 py-1 w-[90%] md:w-24 md:mx-auto justify-center'>
                                    <span>-</span>
                                    <span>{product.quantity}</span>
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="md:text-center"><span className="md:hidden">Total: </span>৳{product.quantity * product.discountPrice}</div>
                            <div className="text-right -mt-14 mb-8 md:mt-0 md:mb-0"><span onClick={() => handleRemove(product._id)}>X</span></div>
                        </div>
                        )
                }
            </div>
            
            <div className="flex justify-between pt-10">
                <Link to={'/'} className="bg-[#FCB543] py-2 font-bold px-6 rounded-sm text-white">Back To Shop</Link>
                <Link to={'/checkout'} className="bg-[#FCB543] py-2 font-bold px-6 rounded-sm text-white">Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;