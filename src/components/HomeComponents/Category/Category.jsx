

const Category = () => {
    const cate = [1, 2, 3, 4, 5, 6, 7, 6, 9, 10, 1, 2, 3, 4, 5, 6]
    return (
        <div>
            <div className='border-b border-b-gray-300 mb-6 pb-3 flex justify-between items-center'>
                <span className='text-lg'>Category Of The Month</span>
            </div>

            <div className="grid grid-cols-8 gap-[2px]">
                {
                    cate.map(cate => <div className='bg-white text-center px-3 py-5 text-sm'>
                    <div>
                        <img src="https://i.ibb.co/Mn6hNRt/cat2.jpg" alt="" className='w-20 h-20 inline' />
                    </div>
                    <div>
                        <h3>Lawn Mowers</h3>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Category;