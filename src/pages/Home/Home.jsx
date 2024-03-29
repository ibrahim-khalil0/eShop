import React from 'react';
import Banner from '../../components/HomeComponents/Banner/Banner';
import Feature from '../../components/HomeComponents/Feature/Feature';
import Deals from '../../components/HomeComponents/Deals/Deals';
import Category from '../../components/HomeComponents/Category/Category';
import Collections from '../../components/HomeComponents/Collections/Collections';
import Blogs from '../../components/HomeComponents/BlogsSection/BlogsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className='px-[5%] sm:px-[10%]'>
                <Feature></Feature>
                <Deals></Deals>
                <Collections></Collections>
                <Category></Category>
                <Blogs></Blogs>
            </main>
        </div>
    );
};

export default Home;