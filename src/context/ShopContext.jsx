import React, { createContext, useState } from 'react'
import { products } from '../products';

export const ShopContext = createContext(null);





export const ShopContextProvider = (props) => {
  
    

    const getDefaultCart = () => {
        let cart = {};
        for (let i=1; i<products.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart()) ;
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const clearCart = () => {
        setCartItems(getDefaultCart());
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
                console.log(itemInfo);
            }
        }
        return totalAmount;
    };

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, clearCart};
    
    return (
        
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  );
}