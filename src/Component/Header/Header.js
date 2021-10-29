import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/events">Events</Link>
           { user?.email ? <button onClick={logOut}>Logout</button>
           :
             <Link to="/login">Login</Link>
        }
             <span>{user?.email}</span>
             
            <Link to="/registration">Registration</Link>
        </div>
    );
};

export default Header;