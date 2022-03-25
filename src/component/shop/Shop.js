import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>something:{product.length}</h2>
        </div>
    );
};

export default Shop;