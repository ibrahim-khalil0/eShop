import React from 'react';

const BlogCard = () => {
    return (
        <div className='space-y-5'>
            <div className='relative'>
                <img src="https://wpmartfury.com/organic/wp-content/uploads/sites/10/2017/12/post-1-380x300.jpg" alt="" className='h-64 w-full' />
                <div className='absolute w-full h-full top-0 overlay'></div>
            </div>
            <div className='space-y-4 pr-4'>
                <h4 className='text-sm'>Tips and Tricks</h4>
                <h1 className='text-lg font-semibold'>How To Make A Fresh Juice Blended For Your Family?</h1>
            </div>
            <div className='text-xs'>
                <span className='text-gray-500'>March 10, 2024 by </span>
                <span>Ibrahim</span>
            </div>
        </div>
    );
};

export default BlogCard;