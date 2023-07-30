import { useContext, useEffect, useState } from "react"
import ReactDOM from 'react-dom';
import { CartType, Item, Product } from "../types/types"
import ProductCard from "./products/ProductCard"
import { CartContext,CartDatabaseContext } from "../App";
import './../styles/cart.css'
import './../styles/products.css'

const Cart = () => {
    const {cartPopup, setCartPopup} = useContext(CartContext)
    const [cartItemArray, setCartItemArray] = useState<any[]>([]);
    const {cartDB, setCartDB} = useContext(CartDatabaseContext)
    const handleCartClick = () => {
        setCartPopup(!cartPopup)
    }

    async function fetchCart() {
        fetch(`https://fakestoreapi.com/carts/user/101`)
        .then(res => res.json())
        .then(json => {
            console.log("came here")
            const cartItems = json as CartType[]
            console.log("cart items",cartItems)
            cartItems.forEach(element => {
                fetch(`https://fakestoreapi.com/products/${element.products[0].id}`)
                .then(response => response.json())
                .then(jsonData => {
                    const item = jsonData as Item
                    const htmlItem = <ProductCard cart={true} _id={item.id} price={item.price} name={item.title} image={item.image} quantity={element.products[0].quantity} key={item.id}/>
                    const array = cartItemArray
                    array.push(htmlItem)
                    console.log(array)
                    setCartItemArray(array)
                })
            })
        })
    }

    const localFetch = () => {
        const cartItems = cartDB.map((item: Product) => {
            return <ProductCard _id={item._id} price={item.price} name={item.name} image={item.image} key={item._id}/>
        })
        setCartItemArray(cartItems)
    }

    useEffect(()=> {
        //fetchCart()
        localFetch()
    }, [cartDB])

    return(
        <div className="cart-container-outer">
            {cartPopup && ReactDOM.createPortal(
                <div className="cart-container">
                        <div className="cart-content" onClick={handleCartClick}>
                            <div className="product-container">
                            {cartItemArray}
                            </div>
                        </div>
                    </div>,
                document.body
            )}
        </div>
    )
}

export default Cart;