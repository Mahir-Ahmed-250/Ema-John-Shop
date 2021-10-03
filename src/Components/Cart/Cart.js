import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let totalQuantity = 0

    let total = 0;
    let tax = 0;
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        tax = total * 0.2
        if (total > 0) {
            shipping = 15
        }
        totalPrice = tax + total + shipping;
        if (product.quantity) {
            totalQuantity = totalQuantity + product.quantity
        }
    }

    return (
        <div className='cart-details'>
            <h3 className="cart-heading">Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <div >

                <h5>Total before tax: ${total.toFixed(2)}</h5>
                <h5>Estimated Tax: ${tax.toFixed(2)}</h5>
                <h5>Shipping & Handling: ${shipping.toFixed(2)}</h5>
                <br />
                <h5>Order Total: ${totalPrice.toFixed(2)} </h5>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;