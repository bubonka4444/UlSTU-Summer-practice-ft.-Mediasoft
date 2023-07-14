import React from "react";
import PaymentForm from "./PaymentForm";
import UserInput from "./UserInput";

function Order ({totalPrice, cleanCart}) {

  

    return (
        <main className="order-container">
            <h2 className="total-price">Заказ на сумму <b className="total">{totalPrice.toLocaleString()} ₽</b></h2>
            <UserInput />
            <PaymentForm />
            <a href="/last" className="order"><button className="order-btn" onClick={cleanCart}> Оформить заказ</button></a>
        </main>
    )
}

export default Order;