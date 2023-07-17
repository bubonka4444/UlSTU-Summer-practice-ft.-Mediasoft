import React from "react";
import {ToastContainer, toast} from "react-toastify";


function Card  ({item, addToCart})  {
    const formattedPrice = `${item.price.toLocaleString()} ₽`;

 
    const handleAddToCart = () => {
        addToCart(item);
        toast.success('Товар добавлен в корзину')
    };

    return (
        <li className="card">
            <img src={item.img} className="card-img" width="290" height="245" alt=""></img>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p> 
            <p className="card-price-value">{formattedPrice}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>+</button>
            
        </li>
    );
}

export default Card;