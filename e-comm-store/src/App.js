import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
// toast-configuration method, 
 // it is compulsory method.
toast.configure()
const promise = loadStripe(
  "pk_test_51IoN77SGkL3g03hz1Hrl7cqStT4CnPWJqn1m7yjHMb30L8Fr8USJ2HIq0CxK5leL26G7P8lLe8Jxajz5UbkiUlTq00xPRFcbOH"
);
function App() {

  const [{}, dispatch] = useStateValue();
  //listener to check who has signed in
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log("user is >>>>>>>", authUser.email);

      if (authUser)
      {
        //user just logged in OR user was already log in
        //user will be stored in DATAlAYER
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user is logger out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      
    }
  }, []) //[] means it will only load once, when the app componet will load...

  return (
    //BEM CONVENTION STYLING
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot/password">
            <ForgotPassword/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>  
        </div>
      </Router>
  );
}

export default App;
