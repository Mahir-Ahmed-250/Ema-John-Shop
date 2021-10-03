import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>

                {/* <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a> */}
            </nav>
        </div>
    );
};

export default Header;