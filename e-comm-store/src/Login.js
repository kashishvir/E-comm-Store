import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import firebase from 'firebase';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Login.css'
// Importing toastify module
import {toast} from 'react-toastify';  
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();     //prevent from refreshing
        
        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(( auth ) => {
                //successfully login the user with email and password.
                console.log(auth);
                if (auth) {
                    history.push('/')
                    toast.success('Logged in', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
                }
            })
            .catch(error =>toast.error(error.message))
    }
    const register = e => {
        e.preventDefault();     //prevent from refreshing

        //firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(( auth ) => {
                //successfully created a new user with email and password.
                console.log(auth);
                if (auth) {
                    // send verification mail.
        auth.user.sendEmailVerification();
        //auth.signOut();
                    //alert("Email sent. Verify your Account!");
                    toast('Email sent to: ',email)
                    history.push('/')
                    toast.success('Signed up')
                }
            })
            .catch(error =>toast.error(error.message))
    }
    const google_auth = e => {
        e.preventDefault();     //prevent from refreshing
        
        //firebase google sign login
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
      var auth = result.user;
      if (auth) {
          // send verification mail.
          history.push('/')
          toast.success('Logged in', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
                }
    // ...
  }).catch((error) => {
    // Handle Errors here.
      console.log(error);
      toast.error(error.message);
  });
    }
      const facebook_auth = e => {
        e.preventDefault();     //prevent from refreshing
        var provider = new firebase.auth.FacebookAuthProvider();
        //firebase facebook register
        firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var auth = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    if (auth) {
          // send verification mail.
          history.push('/')
          toast.success('Logged in', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
                }
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
      console.log(error);
      toast.error(error.message);
  });
      }
    const yahoo_auth = e => {
        e.preventDefault();     //prevent from refreshing

        //firebase yahoo-register
        var provider = new firebase.auth.OAuthProvider('yahoo.com');
        firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    var accessToken = credential.accessToken;
      var idToken = credential.idToken;
      // The signed-in user info.
    var auth = result.user;
      if (auth) {
          // send verification mail.
          history.push('/')
          toast.success('Logged in', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
                }
  })
  .catch((error) => {
    // Handle error.
       // Handle Errors here.
      console.log(error);
      toast.error(error.message);
  });
    }

    return (
        <div className="login">
            <Link to='/'> 
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png">
                </img>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className="login_signButton"
                        type="submit"
                        onClick={signIn}
                    >Sign-in</button>
                </form>
                <Link className="login_forgetPassword"
                      to="/forgot/password">Forgot Password.</Link>
                {/* <p>
                    By signing-in you agree to the NIKE conditions to
                    Buy and Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p> */}
                <button
                    className="login_registerButton"
                    type="submit"
                    onClick={register}
                    >
                    Create an Account.</button>
                <h5>-------------------------OR--------------------------</h5>
                <button
                    className="login_google"
                    type="submit"
                    onClick={google_auth}
                >
                    GOOGLE</button>
                <button
                    className="login_facebook"
                    type="submit"
                    onClick={facebook_auth}
                >
                    FACEBOOK</button>
                <button
                    className="login_yahoo"
                    type="submit"
                    onClick={yahoo_auth}
                >YAHOO!</button>
            </div>
        </div>
    )
}

export default Login
