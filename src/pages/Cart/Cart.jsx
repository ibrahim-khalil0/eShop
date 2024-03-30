import { Link } from "react-router-dom";

const Cart = () => {
    const table = [1, 2, 3]
    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%]'>
            <h1 className='py-20 text-center text-5xl font-bold'>Cart</h1>

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
                    table.map(row => 
                        <div className="md:grid grid-cols-1 md:grid-cols-9 gap-2 px-5 py-5 text-sm border-b border-b-gray-300">
                            <div>
                                <img src="https://i.ibb.co/HH2WWhY/ladies-bag.webp" alt="" className="w-16" />
                            </div>
                            <div className="col-span-3 py-3 md:py-0">iQOS 2.4 Plus Kit, Holder & Chargers - White</div>
                            <div className="md:text-center"><span className="md:hidden">Price: </span>৳1000</div>
                            <div className="text-center col-span-2 py-3 md:py-0">
                                <div className='border border-gray-400 text-center flex gap-4 px-4 py-1 w-[90%] md:w-24 md:mx-auto justify-center'>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="md:text-center"><span className="md:hidden">Total: </span>৳1000</div>
                            <div className="text-right -mt-14 mb-8 md:mt-0 md:mb-0">X</div>
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