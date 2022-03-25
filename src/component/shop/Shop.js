import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = (product) => {
        console.log('clicked');
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <p>selected items</p>
                {
                    cart.map(item => <li>{item.name}
                        <img width={'100px'} src={item.picture} alt="" /></li>
                    )}
            </div>
        </div>
    );
};

export default Shop;