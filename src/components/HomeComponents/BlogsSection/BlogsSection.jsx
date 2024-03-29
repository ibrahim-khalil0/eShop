import BlogCard from "../../../sharedComponents/BlogCard/BlogCard";


const Blogs = () => {
    const blogs = [1, 2, 3]
    return (
        <div className='py-10'>
            <div className='border-b border-b-gray-300 mb-6 pb-3 flex justify-between items-center'>
                <span className='text-lg'>Blogs</span>
                <span className='text-sm underline'>View All</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    blogs.map(blog => <BlogCard></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;