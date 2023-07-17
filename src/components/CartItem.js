import React from "react";
import {BsFillTrash3Fill} from "react-icons/bs"

function CartItem ({cartItem, removeFromCart}) {

    const formattedPrice = `${cartItem.price.toLocaleString()} ₽`;

   
    return(
        <span className="cartItem">
            <img src={cartItem.img} className="cartItem-img" width="290" height="245" alt=""></img>
            <h3 className="cartItem-title">{cartItem.title}</h3>
            <p className="cartItem-description">{cartItem.description}</p> 
            <p className="cartItem-price-value">{formattedPrice}</p>
            <button className="trash-button" onClick={() => removeFromCart(cartItem)} ><BsFillTrash3Fill /></button>
        </span>
    )
}

export default CartItem;