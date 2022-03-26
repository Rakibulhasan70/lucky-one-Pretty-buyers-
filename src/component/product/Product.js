import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    console.log(props);
    const { picture, name, price } = props.product


    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p>Price:${price}</p>

                <button onClick={() => props.handleCart(props.product)} className='btn' >Add To Card  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;