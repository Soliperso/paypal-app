import React, { useState } from 'react'
import PaypalButton from './components/PaypalButton'
import './App.css';

const App = () =>  {
  const [ checkout, setCheckout ] = useState(false)

  return (
    <div className="App">
      {checkout ? <PaypalButton /> : (
        <button onClick={() => setCheckout(true)}>Checkout</button>
      )}    
    </div>
  );
}

export default App;
