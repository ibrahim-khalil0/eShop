

const Collections = () => {
    const cate = [1, 2, 3, 4, 5, 6, 7, 6]
    return (
        
        <div className="py-10">
            <div className='border-b border-b-gray-300 mb-6 pb-3 flex justify-between items-center'>
                <span className='text-lg'>Top Collections</span>
            </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center gap-[2px]"> 
            {
                cate.map(cate =>  <div className='bg-white px-5 py-4 space-y-5'>
                <div>
                    <h3 className="text-sm">Everyday Electronics</h3>
                    <h5 className="text-xs">38,986 products</h5>
                </div>
                <div className='flex justify-between'>
                    <img src="https://i.ibb.co/FxDqjbf/col1.jpg" alt="" className='w-16' />
                    <img src="https://i.ibb.co/KjwC7DH/col2.jpg" alt="" className='w-16' />
                    <img src="https://i.ibb.co/V3XjbnL/col3.jpg" alt="" className='w-16' />
                </div>
            </div>)
            }
           </div>
        </div>
    );
};

export default Collections;