import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/top/Background';
import Products from './components/products/Products';
import { Provider } from 'react';

interface MyContextData {
  category: string;
  setCategory: (newValue: string) => void;
}

export const CategoryContext = React.createContext<MyContextData>({
  category: "All Category",
  setCategory: () => {}
})

function App() {
  const [category, setCategory] = useState("All Category")
  return (
    <CategoryContext.Provider value={{category, setCategory}}>
    <div className="App">
      <Background />
      <Products />
    </div>
    </CategoryContext.Provider>
  );
}

export default App;
