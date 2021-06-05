import React,{useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer'
import CurrencyFormat from 'react-currency-format'
import axios from './axios'
import { db } from './firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import AddressForm from './AddressForm';
import StripeCheckout from "react-stripe-checkout";
function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate a special stripe secret with allows us to charge a customer 
        //everytime the basket changes, it will generate a new secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
            //axios: way of giving requests like get req or post req etc
            //i.e. axios is popular fetching library
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret);
    const handleSubmit = async(event) => {
        //all the stripe stuff....!
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment Intent: payment confirmed

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id) //like an order id
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })
            toast.success("ORDER PLACED! 🎉")
            history.replace('/orders')
        })
    }
    const handleChange = event => {
        //Listen to the changes in the card element
        // and display any errors as a customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

//     async function handleToken(token, addresses) {
//     const response = await axios.post(
//     //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
//       { token, basket }
//     );
//     const { status } = response.data;
//     console.log("Response:", response.data);
//     if (status === "success") {
//       toast("Success! Check email for details", { type: "success" });
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//   }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    checkout(<Link to='/checkout'>{ basket.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Shipping Address</h3>
                    </div>
                    <div className="payment_address">
                        {/* <strong>{user?.email}</strong>
                        <p>Street: 78, Indra Market, Subzi Mandi</p>
                        <p>City: Delhi</p>
                        <p>State/province/area: Delhi</p>
                        <p>Phone number: 01129355193</p>
                        <p>Zip code: 110007</p>
                        <p>Country calling code: +91</p>
                        <p>Country: India</p> */}
                        <AddressForm/>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                              {/* <StripeCheckout
        stripeKey="pk_test_51IoN77SGkL3g03hz1Hrl7cqStT4CnPWJqn1m7yjHMb30L8Fr8USJ2HIq0CxK5leL26G7P8lLe8Jxajz5UbkiUlTq00xPRFcbOH"
        token={handleToken}
                             amount={getBasketTotal(basket)}
                            decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
        name={"text"}
        billingAddress
        shippingAddress
      /> */}
                         {/* stripe magic will go heree!!!! */}
                         <form onSubmit={handleSubmit}>
                            <CardElement
                                onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                            <h3>Order Total: { value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{ processing?<p>Processing</p>:'Buy Now'}</span>
                                </button>
                            </div>
                            {/* if ERROR occurs: */}
                             {error && <div>{ error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
