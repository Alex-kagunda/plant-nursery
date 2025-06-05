// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.id === product.id);
            if (itemInCart) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: quantity } : item
                )
            );
        }
    };

    const getCartTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartTotalItems, getCartTotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};