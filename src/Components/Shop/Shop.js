import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json()
                .then(data => {
                    setProducts(data)
                    setDisplayProducts(data)
                })
            )
    }, [])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()

            const storedCart = [];
            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }

            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = []

        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = (event.target.value)
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts)
    }
    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder=" Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key} product={product}
                            handleAddToCart={handleAddToCart} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/order-review'>
                            <button className='btn-regular'>Order Review</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;