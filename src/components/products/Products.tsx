import { useEffect, useState } from "react";    
import './../../styles/products.css'
import ProductCard from "./ProductCard";
import { Product, Item } from "../../types/types";

function Products() {
    const [items, setItems] = useState([])
    const [skipFactor, setSkipFactor] = useState(0)
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products`).then(res => {
            return res.json()
        }).then(json => {
            const items = json.map((item: Item) => {
                return <ProductCard _id={item.id} price={item.price} name={item.title} image={item.image} key={item.id}/>
            })
            setItems(items)
        })


       
    },[])

    return(
        <div className="product-container">
            {items}
        </div>
    )
}
export default Products;