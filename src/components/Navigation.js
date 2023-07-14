import React from "react";
import { useState } from 'react';
import {FiMenu, FiX} from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';

function Navigation () {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navigation">
                <a href="/">
                    <img className="logo"   src="images\logo.png"  width={50} height={50} alt="logo" />
                </a>

                <div onClick={() => setOpen(!open)} className="nav-icon">
                    {open ? <FiX /> : <FiMenu />}
                </div>
            
                <ul className={open ? 'navigation-list active' : 'navigation-list'}>
                    <li >
                        <a href="#about"  className="navigation-link" onClick={() => setOpen(false)}>О нас</a>
                    </li>
                     <li >
                        <a href="#reviews" className="navigation-link" onClick={() => setOpen(false)}>Отзывы</a>
                    </li>
                    <li >
                        <a href="#reviews"  className="navigation-link" onClick={() => setOpen(false)}>Контакты</a>
                    </li>
                    <li >
                        <a href="#reviews" className="navigation-link" onClick={() => setOpen(false)}>Скидки</a>
                    </li>   
                    
                    
                </ul>

                <a href='/cart' className="navigation-link">  <FaShoppingCart className='cart-button'/> </a>
                
            </nav>
    )
}

export default Navigation;