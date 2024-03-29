import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { CiPhone, CiUser } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-white">
            <div className='flex justify-between items-center py-5 px-[5%] sm:px-[10%] flex-wrap lg:flex-nowrap'>
                {/* this is site logo  */}
                <div className='w-1/2 lg:w-[270px] order-1'>
                    <h1 className='text-3xl font-bold'><span className='text-[#FCB543]'>e</span>-Shop</h1>
                </div>
                {/* search bar here  */}
                <div className='lg:flex-1 w-[100%] order-3 lg:order-2 mt-8 lg:mt-0 flex justify-end'>
                    <form className='flex justify-between w-[80%] lg:w-full'>
                        <input type="search" name="" placeholder='Search product here...' id="search" className='border outline-0 border-y-gray-300 border-r-gray-300 flex-1 py-2 px-4 lg:rounded-l-md' />
                        <button className='bg-[#FCB543] px-6 rounded-r-md text-white font-bold text-lg'>Search</button>
                    </form>
                </div>
                {/* account section here  */}
                <div className='w-1/2 lg:w-[270px] flex justify-end gap-4 items-center order-2 lg:order-3'>
                    
                    <div className="relative">
                        <span className="text-4xl"><IoCartOutline></IoCartOutline></span>
                        <span className="absolute right-0 -bottom-1 bg-[#FCB543] grid place-items-center text-[12px] w-5 h-5 rounded-full text-white">10</span>
                    </div>
                    <div className="relative">
                        <span className="text-4xl"><IoHeartOutline></IoHeartOutline></span>
                        <span className="absolute right-0 -bottom-1 bg-[#FCB543] grid place-items-center text-[12px] w-5 h-5 rounded-full text-white">10</span>
                    </div>
                
                    <div className="flex items-center gap-2">
                        <span className="text-4xl"><CiUser></CiUser></span>
                        <span>Log in</span>
                    </div>
                </div>

            </div>

            {/* menu section start here  */}
            <div className="flex text-md justify-between items-center border-y-gray-200 lg:border py-3 px-[5%] sm:px-[10%]">
                {/* category area  */}
                
                <div className="hidden lg:flex items-center w-[230px]">
                    <h2 className="font-bold">Shop By Category</h2>
                    <span className="text-3xl"><RxCaretDown></RxCaretDown></span>
                </div>
                {/* nav menu area  */}
                <div className="flex-1 relative">
                    <span className="dropDown inline lg:hidden p-1 absolute -top-[70px] text-4xl"><HiBars3></HiBars3></span>
                    <ul className="lg:flex justify-center gap-8 font-normal tracking-wider flex-wrap dropMenu hidden hover:block lg:hover:flex hover:absolute hover:-top-10 lg:hover:top-0 lg:hover:relative bg-[#d9d8d8] lg:bg-[#ffffff00] text-white lg:text-black px-5 lg:px-0 py-2 lg:py-0">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/shop'}>Shop</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                        <li><NavLink to={'/about'}>About Us</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                    </ul>
                </div>
                {/* contact information area  */}
                <div className="w-[230px] lg:flex justify-end items-center hidden">
                    <span className="text-xl"><CiPhone></CiPhone></span>
                    <span>+880 16110 41680</span>
                </div>
            </div>
        </div>
    );
};

export default Header;