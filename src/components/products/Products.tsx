import { ReactComponentElement, useContext, useEffect, useState } from "react";    
import '../../styles/products.css'
import ProductCard from "./ProductCard";
import { Product, Item } from "../../types/types";
import {CategoryContext, SearchContext, DatabaseContext} from '../../App'
import { JsxElement } from "typescript";
import { title } from "process";

function Products() {
    const [items, setItems] = useState([])
    const [skipFactor, setSkipFactor] = useState(0)
    const {category, setCategory} = useContext(CategoryContext)
    const {input, setInput} = useContext(SearchContext)
    const {product, setProducts} = useContext(DatabaseContext)

    useEffect(() => {
        if(category == "All Category") {
            fetch(`https://fakestoreapi.com/products`).then(res => {
                return res.json()
            }).then(json => {
                const items = json.map((item: Item) => {
                    const newProducts = product
                    if(!newProducts.has(item.title)){
                        newProducts.set(item.title.toLowerCase(), item)
                        setProducts(newProducts)
                    }
                    return <ProductCard _id={item.id} price={item.price} name={item.title} image={item.image} key={item.id}/>
                })
                setItems(items)
            })
        }else{
            fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => {
                return res.json()
            }).then(json => {
                const items = json.map((item: Item) => {
                    const newProducts = product
                    if(!newProducts.has(item.title)){
                        newProducts.set(item.title.toLowerCase(), item)
                        setProducts(newProducts)
                    }
                    return <ProductCard _id={item.id} price={item.price} name={item.title} image={item.image} key={item.id}/>
                })
                setItems(items)
            })
        }
        
       
    },[category])

    useEffect(()=> {
        search()
    }, [input])

    const search = () => {
        let match: any = [];
        product.forEach((item, key) => {
          if(key.search(input) >= 0) {
            const pdt = <ProductCard _id={item.id} price={item.price} name={item.title} image={item.image} key={item.id}/>
            match.push(pdt)
          }  
        })
        setItems(match)
    }

    return(
        <div className="product-container">
            {items}
        </div>
    )
}
export default Products;