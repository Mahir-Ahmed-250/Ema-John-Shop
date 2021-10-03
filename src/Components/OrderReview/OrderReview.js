import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';



const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    const handleOrder = () => {
        if (cart.length > 0) {
            history.push('./place-order')
            clearTheCart()
        }
        else {
            history.push('./no-order')
        }
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <div>
                    {cart.map(product => <ReviewItem key={product.key}
                        handleRemove={handleRemove} product={product}></ReviewItem>)}
                </div>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleOrder} className='btn-regular'>Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;