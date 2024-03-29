import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import Rating from 'react-rating';
const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product
    console.log(props.product)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <Rating style={{ color: 'gold' }}
                    initialRating={star}
                    emptySymbol="far fa-star fa-2x"
                    fullSymbol="fas fa-star fa-2x " readonly></Rating>
                <br />
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;