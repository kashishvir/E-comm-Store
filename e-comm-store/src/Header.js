import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// Importing toastify module
import {toast} from 'react-toastify';  
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [ searchTerm, setSearchTerm] = useStateValue('');
    const handleAuthentication = () => {
        //e.preventDefault();     //prevent from refreshing
        if (user) {
            auth.signOut();
            toast.error('Logged out', {
            position: toast.POSITION.BOTTOM_RIGHT, autoClose:5000
        })
        }
    }
    
    return (
        <div className="header">
            <Link to="/">
                <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                />
            </Link>
            {/* <input
                    className="header_search_input"
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                /> */}
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className="header_option">
                        <span className="header_option_lineONE">
                        Hello {user? user?.email:'Guest'}
                        </span>
                        <span className="header_option_lineTWO">
                             {user?'Sign Out':'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header_option">
                    <span className="header_option_lineONE">
                        Returns
                    </span>
                    <span className="header_option_lineTWO">
                        & Orders
                    </span>
                </div>
                </Link>
                {/* <div className="header_option">
                    <span className="header_option_lineONE">
                        Your 
                    </span>
                    <span className="header_option_lineTWO">
                        Prime
                    </span>
                </div> */}
                <Link to={user?'/checkout': '/login'}>
                    <div className="header_optimalBasket">
                    <ShoppingBasketIcon />
                        <span className="header_option_lineTWO_basketCount">
                            {basket?.length}
                    </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
