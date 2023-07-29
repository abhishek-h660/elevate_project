import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/top/Background';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Background />
      <Products />
    </div>
  );
}

export default App;
