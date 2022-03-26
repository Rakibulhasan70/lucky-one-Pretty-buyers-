import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header' >
            <h1>Pretty <span>Buyers</span></h1>
            <h3 className='header-name'>Choose Your <span>Favourite</span> Item</h3>
        </div>
    );
};

export default Header;