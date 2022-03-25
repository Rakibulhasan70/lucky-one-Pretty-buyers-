import React from 'react';
import './Product.css'

const Product = (props) => {

    console.log(props);
    const { picture, name, price } = props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="product-info">
                <h3>name: {name}</h3>
                <p>Price:${price}</p>
                <button className='btn'>Add To Card</button>
            </div>
        </div>
    );
};

export default Product;