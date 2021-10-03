import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.product;
    return (
        <div className='product'>
            <div>
                <h3 className='product-name'>{name}</h3>
                <h5 >Price: {price}</h5>
                <p>Quantity: {quantity}</p>
                <button onClick={() => props.handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;