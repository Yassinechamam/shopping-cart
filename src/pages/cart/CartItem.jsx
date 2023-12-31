import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export const CartItem = ({data}) => {

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
  return (
    <div className='cartItem'>
        <img src={data.productImage} alt="" />
        <div className="description">
            <p>{data.productName}</p>
            <p>${data.price}</p> 
            <div className="countHandler">
              <button onClick={() => removeFromCart(data.id)}>-</button>
              <input type="text" value={cartItems[data.id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), data.id)}/>
              <button onClick={() => addToCart(data.id)}>+</button>  
            </div>   
        </div>
        
    </div>
  )
}
