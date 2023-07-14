import React from "react";
import {BsFillTrash3Fill} from "react-icons/bs"

function CartItem ({item, removeFromCart}) {

    const formattedPrice = `${item.price.toLocaleString()} ₽`;

    return(
        <span className="cartItem">
            <img src={item.img} className="cartItem-img" width="290" height="245" alt=""></img>
            <h3 className="cartItem-title">{item.title}</h3>
            <p className="cartItem-description">{item.description}</p> 
            <p className="cartItem-price-value">{formattedPrice}</p>
            <button className="trash-button" onClick={() => removeFromCart(item)} ><BsFillTrash3Fill /></button>
        </span>
    )
}

export default CartItem;