import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { products } from '../../products';
import "./cart.css";
import { CartItem } from "./CartItem";


export const Cart = () => {
    const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            {products.map((product) => {
                if (cartItems[product.id] > 0) {
                    return( <CartItem data={ product }/>);
                }
            })}

            <div className="checkout">
                <p>SubTotal: ${totalAmount}</p>
                <Link to="/"><button>Continue Shopping</button></Link>
                <button onClick={clearCart}>Clear My Cart</button>    
            </div>
            
    </div>
  )
}
