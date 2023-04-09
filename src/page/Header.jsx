import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
            <a href='/1'>1</a>
            <a href='/2'>2</a>
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Header;