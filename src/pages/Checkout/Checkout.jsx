import React from 'react';

const Checkout = () => {

    const products = [1, 2, 3]
    return (
        <div className='px-[5%] sm:px-[7%] lg:px-[10%]'>
            <h1 className='py-20 text-center text-5xl font-bold border-b border-b-gray-300 mb-10'>Checkout</h1>

            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1 md:w-3/5'>
                    <h3 className='font-bold mb-5'>Billing Details</h3>
                    <form action="" className='flex flex-col text-xs text-gray-500' id='checkoutForm'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="" id="firstName" />

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="" id="lastName" />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" />

                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="" id="phone" />

                        <label htmlFor="city">City</label>
                        <input type="text" name="" id="city" />

                        <label htmlFor="address">Your Address</label>
                        <input type="text" name="" id="address" />

                        <label htmlFor="additional">Additional Information</label>
                        <textarea name="" id="" rows="5"></textarea>
                    </form>
                </div>

                <div className='flex-1'>
                    <h3 className='font-bold mb-5'>Your Order</h3>
                    <div className='border border-gray-600 p-4 bg-white'>
                        <div className='flex justify-between uppercase'>
                            <h1>Product</h1>
                            <h1>Total Price</h1>
                        </div>

                        <div className='space-y-3 mt-2 py-5 border-y border-y-gray-300'>
                            {
                                products.map(product => 
                                    <div className='flex justify-between text-sm'>
                                        <div className='w-3/4'>
                                            <h5>iQOS 2.4 Plus Kit, Holder & Chargers - White</h5>
                                            <h5>X 1</h5>
                                        </div>
                                        <h5>৳1000</h5>
                                    </div>
                                    )
                            }

                        </div>

                        <div className='flex justify-between uppercase pt-5 font-bold'>
                            <h1>total</h1>
                            <h1 className='text-[#FF3300] text-lg'>৳1000</h1>
                        </div>

                        
                    </div>

                    <div>
                        <button className='w-full bg-[#FCB543] text-white uppercase py-3 mt-5 font-bold'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;