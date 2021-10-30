import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import useAuth from './../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="header">
            <Navbar/>
        </div>
    );
};

export default Header;