import { useEffect, useState } from "react"
import { CartType, Item } from "../types/types"
import ProductCard from "./products/ProductCard"

const Cart = () => {
    const [cartItemArray, setCartItemArray] = useState<any[]>([]);

    async function fetchCart() {
        const res = await fetch(`https://fakestoreapi.com/carts/user/101`)
        .then(res => res.json())
        .then(json => {
            const cartItems = json as CartType[]
            cartItems.forEach(element => {
                fetch(`https://fakestoreapi.com/products/${element.products[0].id}`)
                .then(response => response.json())
                .then(jsonData => {
                    const item = jsonData as Item
                    const htmlItem = <ProductCard cart={true} _id={item.id} price={item.price} name={item.title} image={item.image} quantity={element.products[0].quantity} key={item.id}/>
                    const array = cartItemArray
                    array.push(htmlItem)
                    setCartItemArray(array)
                })
            })
        })
    }

    useEffect(()=> {
        fetchCart()
    }, [])

    return(
        <div>
            {cartItemArray}
        </div>
    )
}

export default Cart;