import { LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='border-t border-t-gray-200 px-[5%] sm:px-[10%] py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16'>
            <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <div>
                    <ul className="text-sm pt-5 space-y-3">
                        <li className="flex gap-2 items-center justify-center sm:justify-start">
                            <span><LuMapPin></LuMapPin></span>
                            <span>Mirpur - 2, Dhaka Bangladesh</span>
                        </li>
                        <li className="flex gap-2 items-center justify-center sm:justify-start">
                            <span><FaRegEnvelope /></span>
                            <span>mdibrahimkhalil0183@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg text-center">Social Media</h3>
                <div className="flex justify-between pt-5 text-sm">
                    <div className="flex flex-col space-y-3">
                        <Link className="flex gap-2 items-center"><FaFacebookF /> <span>Facebook</span></Link>
                        <Link className="flex gap-2 items-center"><FaTwitter /> <span>Twitter</span></Link>
                    </div>
                    <div className="text-right flex flex-col space-y-3">
                        <Link className="flex gap-2 items-center justify-end"><span>Instagram</span> <FaInstagram /> </Link>
                        <Link className="flex gap-2 items-center justify-end"><span>Linkedin</span> <FaLinkedinIn /> </Link>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg text-center">Quick Link</h3>
                <div className="flex justify-between pt-5 text-sm">
                    <div className="flex flex-col space-y-3">
                        <Link>Shop</Link>
                        <Link>About Us</Link>
                    </div>
                    <div className="text-right flex flex-col space-y-3">
                        <Link>Help</Link>
                        <Link>Terms</Link>
                    </div>
                </div>
            </div>

            <div className="text-center sm:text-right">
                <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
                <div className="text-md">
                    <form action="" className="flex items-center justify-center sm:justify-end">
                        <input type="search" name="" id="" className="rounded-l-sm border-y border-y-gray-800 border-l border-l-gray-800 px-3 py-1 outline-0" />
                        <button className="bg-[#FCB543] text-white py-2 border-y border-y-[#FCB543] px-3 rounded-r-sm"><FaRegEnvelope></FaRegEnvelope></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;