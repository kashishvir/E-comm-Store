import React,{useState, useEffect}  from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import './ForgotPassword.css'
// Importing toastify module
import {toast} from 'react-toastify';  

function ForgotPassword({history}) {
    const [email, setEmail] = useState('');
    //const [loading, setLoading] = useState('');
    
    // const forgotPass = ({ history }) => {
        
    // }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true,
        };
        await auth
            .sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('')
                toast.success("check your email for password email link");
            })
            .catch((error) => {
                toast.error(error.message);
                console.log('error msg in forgot password', error);
            })
    }
    return (
        <div className="forgot">
            <img
                    className="forgot_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png">
                </img>
            <h3 className="forgot_title">Forgot Password</h3>
            <form
                className="forgot_input"
                onSubmit={handlesubmit}>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your Email"
                    autofocus />
                <button className="forgot_button" disabled={!email}>Submit</button>
                </form>
        </div>
    )
}

export default ForgotPassword
