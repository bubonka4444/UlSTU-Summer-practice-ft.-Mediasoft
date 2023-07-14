import React from "react";

function About () {
    return (
        <div id="about">
            <h2 className="about-title">О нас</h2>
            <section className="about-container">
                <img className="about-image" src="images\bed.jpg" />
                <section className="about-text-content">
                    <div className="about-text">Мы - молодая компания, специализирующаяся на качестве сна. 
                    Сон - неотъемлемая часть здорового образа жизни любого человека. Любые капризы за ваши деньги.
                    </div>
                </section>
            </section>
        </div>    
    );

}

export default About;