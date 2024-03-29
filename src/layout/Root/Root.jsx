
import { Outlet } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import Footer from '../../sharedComponents/Footer/Footer';
import Copyright from '../../sharedComponents/Copyright/Copyright';

const Root = () => {
    return (
        <div className='max-w-[2100px] mx-auto border-x border-x-gray-200 bg-[#F5F5F5]'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Root;