import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./Pages/Shopping-Cart-And-Checkout/cartfun";

ReactDOM.render(
  <React.StrictMode>
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
</React.StrictMode>,
  document.getElementById('root')
);


