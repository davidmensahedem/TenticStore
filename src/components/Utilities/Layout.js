import React from 'react';
import AppNavbar from './AppNavbar';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Layout = () => {
    return (<>
        <AppNavbar/>
        <Outlet />
        <Cart placement="end" />
    </>);
}

export default Layout;