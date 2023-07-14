import React from "react";
import Card from "./Card";



function Catalog ({items, addToCart,}) {


    
    return (
        <section className="catalog">
            <ul className="cards">
                {items.map((item) => (
                    <Card item={item} key={item.id} addToCart={addToCart} />
                    ))}
            </ul>
            
        </section>
    );
}

export default Catalog;