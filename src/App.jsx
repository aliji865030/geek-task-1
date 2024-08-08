// App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Product Store</h1>
      </header>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
