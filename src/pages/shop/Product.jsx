import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export const Product = ({data}) => {

    const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className='product'>     
        <img src={data.productImage} alt="" />
        <div className="description">
            <p>{data.productName}</p>
            <p>${data.price}</p>    
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(data.id)}>Add To Cart {cartItems[data.id] > 0 && <>({cartItems[data.id]})</>}</button>
    </div>
  )
}
