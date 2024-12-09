import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
