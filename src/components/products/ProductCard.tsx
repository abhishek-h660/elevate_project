import { useState,useContext } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/products.css';
import { Product } from '../../types/types';
import { CartDatabaseContext } from '../../App';
const ProductCard = (props:any) => {
    const [popup, setPopup] = useState(false)
    const openPopup=(id: string)=>{
        setPopup(!popup)
    }
    
    const {cartDB, setCartDB} = useContext(CartDatabaseContext)
    const handleAddToCart = (product: Product) => {
        const newDB = cartDB
        newDB.push(product)
        setCartDB(newDB)
        console.log(cartDB)
        //
        const reqBody = {
            "userId":101,
            "date": new Date(),
            "products":[{
                "productId":product._id,
                "quantity":1
            }],
            
        };
        fetch(`https://fakestoreapi.com/carts`, {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody),
            mode:"cors",
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }
    

    return(
        <>
            <div className="product" key={props._id} onClick={()=>{openPopup(props._id)}} id={props._id}>
                <div className="product-heading">{props.name.substring(0, 20)}</div>
                <div className="product-subheading">
                    <span>Price</span>: $ {props.price}
                </div> 
                { 
                    props.cart && <div>Quantity: {props.quantity}</div> 
                }
                <img src={props.image} alt="unable to render"/>
            </div>
            {popup &&
                ReactDOM.createPortal(
                    <div className="product-popup" onClick={()=>{openPopup(props._id)}}>
                        <div className="product-body">
                            <img src={props.image} alt="unable to render"/>
                            <div className='product-popup-text-part'>
                                <div>{props.name}</div>
                                <div>Price: ${props.price}</div>
                            </div>
                            <button className="product-cta-button" onClick={()=>{handleAddToCart(props)}}> Add To Cart</button>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
        
    )
}

export default ProductCard;