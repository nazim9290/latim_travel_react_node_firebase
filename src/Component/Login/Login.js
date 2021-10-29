import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const {login,handlecreatuser}=useAuth()
    const history=useHistory()
    const location = useLocation()
    const [loginuser,setLoginuser]=useState({})

    let { from } = location.state || { from: { pathname: "/" } };
    const loginWithRedirect=()=>{
        login()
         .then(result=>{
            history.push(from)
        })
    };
    const loginhandler=(e)=>{
      setLoginuser({...loginuser,[e.target.name] : e.target.value})
     
    };
    const loginsubmit=(e)=>{
        e.preventDefault()
         console.log(loginuser?.email);
      console.log(loginuser.password);
    }
    return(
        <div>
           
           <button onClick={loginWithRedirect}>Google</button>
        </div>
    );
};

export default Login;