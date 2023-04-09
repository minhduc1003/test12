import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
            <NavLink to={"/1"}>1</NavLink>
            <NavLink to={"/2"}>2</NavLink>
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Header;