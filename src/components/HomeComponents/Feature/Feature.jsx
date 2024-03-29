import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlinePayment } from "react-icons/md";
import { PiWechatLogoThin } from "react-icons/pi";



const Feature = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 py-10 gap-3'>
            <div className='flex gap-2 items-center bg-white py-4 pl-4'>
                <div>
                    <span className='text-6xl text-[#FCB543]'><CiDeliveryTruck></CiDeliveryTruck></span>
                </div>
                <div>
                    <h5 className='font-bold'>Free Delivery</h5>
                    <h6 className='text-sm text-gray-700'>For all order over BDT 1000</h6>
                </div>
            </div>
            <div className='flex gap-2 items-center py-4 pl-4 shadow-xl shadow-gray-200'>
                <div>
                    <span className='text-6xl font-normal text-[#FCB543]'><MdOutlinePayment></MdOutlinePayment></span>
                </div>
                <div>
                    <h5 className='font-bold'>Secure Payment</h5>
                    <h6 className='text-sm text-gray-700'>100% secure payment</h6>
                </div>
            </div>
            <div className='flex gap-2 items-center py-4 pl-4 bg-white'>
                <div>
                    <span className='text-6xl text-[#FCB543]'><PiWechatLogoThin></PiWechatLogoThin></span>
                </div>
                <div>
                    <h5 className='font-bold'>24/7 Support</h5>
                    <h6 className='text-sm text-gray-700'>Dedicated support</h6>
                </div>
            </div>
            {/* <div className='flex gap-2 items-center'>
                <div>
                    <span className='text-6xl text-[#FCB543]'><CiDeliveryTruck></CiDeliveryTruck></span>
                </div>
                <div>
                    <h5 className='font-bold'>Free Delivery</h5>
                    <h6 className='text-sm text-gray-700'>For all order over BDT 1000</h6>
                </div>
            </div> */}
        </div>
    );
};

export default Feature;