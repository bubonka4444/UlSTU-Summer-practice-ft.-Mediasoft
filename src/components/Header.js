import React from 'react';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import CartNavigation from './CartNavigation';
import OrderNavigation from './OrderNavigation';

function Header () {

    



    return (
        <header >
            <Routes>
                <Route path='/order' element={< OrderNavigation /> } />
                <Route path='/' element={< Navigation />} />
                <Route path='/cart' element={< CartNavigation />} />
            </Routes>
            
        </header>

        
    );
}

export default Header;