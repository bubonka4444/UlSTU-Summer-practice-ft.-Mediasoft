import React from "react";

function CartNavigation () {
    return (
        <>
            <a href="/"><button className="cart-nav-button">←  Вернутся к покупкам</button></a>
            <a href="/order"><button className="cart-nav-button">Перейти к оформлению  →</button></a>
        </>
    )
}

export default CartNavigation;