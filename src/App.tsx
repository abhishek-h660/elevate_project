import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/top/Background';
import Products from './components/products/Products';
import { Provider } from 'react';
import { Item } from './types/types';

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

function App() {
  const [category, setCategory] = useState("All Category")
  const [input, setInput] = useState("")
  const [product, setProducts] = useState(new Map<string, Item>)
  return (
    <CategoryContext.Provider value={{category, setCategory}}>
      <SearchContext.Provider value={{input, setInput}}>
        <DatabaseContext.Provider value={{product, setProducts}}>
          <div className="App">
            <Background />
            <Products />
          </div>
        </DatabaseContext.Provider>
      </SearchContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
