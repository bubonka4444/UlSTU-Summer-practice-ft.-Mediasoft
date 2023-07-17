import React from "react";
import CartItem from "./CartItem";
import { TbMoodCry } from 'react-icons/tb'


function Cart ({cartItems, removeFromCart}) {
    
    console.log(cartItems)
    console.log(cartItems.length)
    return (
        <main className="cart">
            {cartItems.length > 0 ? <h1 className="cart-title">Корзина</h1> 
            : <h1 className="cart-title">Корзина пуста < TbMoodCry className="sad"/> </h1>}
            <section className="cartItems">
                {cartItems?.map((cartItem) => (
                <CartItem cartItem={cartItem}  key={Math.random()} removeFromCart={removeFromCart} />
                ))}
            </section>
            
        </main>
    );

}

export default Cart;