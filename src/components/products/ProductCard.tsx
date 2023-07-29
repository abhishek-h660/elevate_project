import { useState } from 'react';
import ReactDOM from 'react-dom';
import './../../styles/products.css'
import { Product } from '../../types/types';
const ProductCard = (props:any) => {
    const [popup, setPopup] = useState(false)
    const openPopup=(id: string)=>{
        //console.log("Clicked ", id)
        setPopup(!popup)
    }
    

    const handleAddToCart = (product: Product) => {
        const reqBody = {
            "userId":101,
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
                <div style={{"color": 'black'}}>{props.name.substring(0, 20)}</div>
                <div style={{"color": 'orange'}}>Price: $ {props.price}</div> 
                { 
                    props.cart && <div>Quantity: {props.quantity}</div> 
                }
                <img src={props.image} alt="unable to render"/>
                
            </div>
            {popup &&
                ReactDOM.createPortal(
                    <div className="product-popup" onClick={()=>{openPopup(props._id)}}>
                        <img src={props.image} alt="unable to render"/>
                        <div className='product-popup-text-part'>
                            <div>{props.name}</div>
                            <div>Price: ₹{props.price}</div>
                        </div>
                        <div className='product-popup-button-part'>
                            <button onClick={()=>{handleAddToCart(props)}}> Add To Cart</button>
                        </div>

                       
                    </div>,
                    document.body
                )
            }
        </>
        
    )
}

export default ProductCard;