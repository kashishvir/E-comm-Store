import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
 // Importing toastify module
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function CheckoutProduct({ id, title, price, rating, image, hideButton}) {
    
    const [{basket}, dispatch] = useStateValue();
        
    const removeFromItem = () => {
        toast(title + " : REMOVED FROM CART ❌", {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id, 
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct_img"
                src={image}
            ></img>
            <div
                className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button
                    onClick={removeFromItem}
                        className="checkout_button" >
                    Remove from Basket
                    </button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct