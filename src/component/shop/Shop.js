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
    const clearData = () => setCart([])

    const selectedData = () => {
        const selectItem = Math.floor(Math.random() * cart.length)
        setCart(selectItem)
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
                        <img className='image-container' src={item.picture} alt="" /></li>
                    )}
                <br />
                <button onClick={selectedData} className='selected-iteam'>Selected Item</button>
                <br />
                <br />
                <button onClick={clearData} className='choose-again'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;