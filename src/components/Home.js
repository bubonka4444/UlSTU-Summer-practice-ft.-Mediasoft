import React from "react";
import Catalog from "./Catalog.js";
import About from "./About.js";
import Reviews from "./Reviews.js";



function Home ({items, addToCart}) {
    return (
        <main>
            <Catalog items={items} addToCart={addToCart} />
            <About />
            <Reviews />
        </main>
    );

}

export default Home;