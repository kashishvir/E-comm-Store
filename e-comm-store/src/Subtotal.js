import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';  
function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const noUserClick = () => {
        toast.warning('CART IS EMPTY!')
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <div>
                    <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input  
                            type="checkbox"/>
                            This order contains a gift.
                    </small>
                </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button
                onClick={(basket.length>0)?e => history.push('/payment'):noUserClick}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
