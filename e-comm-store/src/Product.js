import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
 // Importing toastify module
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({id, title, price, rating, image }) {
    //Pull information from the data layer
        const [{basket}, dispatch] = useStateValue();
        //dispatch the item into the datalayer
    // console.log("this is the basket>>>>", basket);
    const addToBasket = () => {
        toast(title+" : ADDED TO CART ✅", {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            },
        })
    }
    return (
        <div className="product">
            <div className="product_info" >
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>
            <img
                    src={image}
            ></img>
            <button onClick={addToBasket}
            >Add to Basket</button>
        </div>
    )
}

export default Product
