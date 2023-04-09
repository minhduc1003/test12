import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
            <Link reloadDocument to={"/1"}>1</Link>
            <Link reloadDocument to={"/2"}>2</Link>
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Header;