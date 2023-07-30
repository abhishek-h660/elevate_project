import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/top/Background';
import Products from './components/products/Products';
import { Provider } from 'react';
import { Item } from './types/types';
import Cart from './components/cart';

interface CategoryContextData {
  category: string;
  setCategory: (newValue: string) => void;
}

interface SearchContextData {
  input: string;
  setInput: (newValue: string) => void;
}

interface DatabaseContextData {
  product: Map<string, Item>;
  setProducts: (newValue: Map<string, Item>) => void;
}

interface CartContextData {
  cartPopup: boolean;
  setCartPopup: (newValue: boolean) => void;
}

interface CartDatabaseContextData {
  cartDB: any[];
  setCartDB: (newValue: any[]) => void;
}



export const CategoryContext = React.createContext<CategoryContextData>({
  category: "All Category",
  setCategory: () => {}
})

export const SearchContext = React.createContext<SearchContextData>({
  input: "",
  setInput: () => {}
})

export const DatabaseContext = React.createContext<DatabaseContextData>({
  product: new Map<string, Item>(),
  setProducts: () => {}
})

export const CartContext = React.createContext<CartContextData>({
  cartPopup: false,
  setCartPopup: () => {}
})


export const CartDatabaseContext = React.createContext<CartDatabaseContextData>({
  cartDB: [],
  setCartDB: () => {}
})

function App() {
  const [category, setCategory] = useState("All Category")
  const [input, setInput] = useState("")
  const [product, setProducts] = useState(new Map<string, Item>)
  const [cartPopup, setCartPopup] = useState(false);
  const [cartDB, setCartDB] = useState<any[]>([]);
  return (
    <CategoryContext.Provider value={{category, setCategory}}>
      <SearchContext.Provider value={{input, setInput}}>
        <CartContext.Provider value={{cartPopup, setCartPopup}}>
          <DatabaseContext.Provider value={{product, setProducts}}>
          <CartDatabaseContext.Provider value={{cartDB, setCartDB}}>
            <div className="App">
              <Background />
              <Products />
              <Cart />
            </div>
            </CartDatabaseContext.Provider>
          </DatabaseContext.Provider>
        </CartContext.Provider>
      </SearchContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
