import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div className='credit-card-container'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='credit-card-form'>
        <input className='credit-card-data-input'
            
          name="number"
          placeholder="Номер карты"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input className='credit-card-data-input'
          
          name="name"
          placeholder="NAME SURNAME"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input className='credit-card-data-input'
          
          name="expiry"
          placeholder="Срок действия"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input className='credit-card-data-input'
          
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
      </form>
    </div>
  );
}

export default PaymentForm;