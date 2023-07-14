import React from "react";
import CartItem from "./CartItem";
import { TbMoodCry } from 'react-icons/tb'

function Cart ({cartItems, removeFromCart}) {
    
    return (
        <main className="cart">
            {cartItems.length > 0 ? <h1 className="cart-title">Корзина</h1> 
            : <h1 className="cart-title">Корзина пуста < TbMoodCry className="sad"/> </h1>}
            <section className="cartItems">
                {cartItems?.map((item) => (
                <CartItem item={item}  key={item.title} removeFromCart={removeFromCart} />
                ))}
            </section>
            
        </main>
    );

}

export default Cart;