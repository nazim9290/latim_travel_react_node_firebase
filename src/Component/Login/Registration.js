import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import "./LoginPage.css";

const Registration = () => {
  const auth = getAuth();
  const {
    handleUserLogin,
    googleLogin,
    githubLogin,
    user,
    setUser,
    setIsLoading,
    googleprovider,
    githubprovider,
    error,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();

  let redirect_url = location.state?.from || "/home";
  console.log(location.state?.from);
  //google redirect
  const googleRedirect = (provider) => {
    googleLogin(provider).then((result) => {
      history.push(redirect_url);
    });
  };

  const handleSignUp = () => {
    history.push("/login");
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onRegister = () => {
    if (email && password) {
      handleUserLogin(email, password);
    } else {
      alert("email and password is required");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push(redirect_url);
      }
    });
  }, []);
  return (
    <div>
      <div className="login-section">
        <div class="container">
          <div className="row">
            <div className="col-md-6">
              <div class="register">
                <div class="container">
                  <i class="fas fa-user-plus fa-5x"></i>
                  <h2>Hello ! Traveler</h2>
                  <p>DO YOU HAVE ALL READY ACCOUNT ?</p>
                  <button onClick={handleSignUp}>
                    SIGN UP{" "}
                    <img src="https://img.icons8.com/fluency/48/000000/long-arrow-right.png" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="login">
                <div class="login-container">
                  <h1>REGISTRATION</h1>
                  <input
                    onBlur={handleEmail}
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <br />
                  <input type="checkbox" />
                  <span>Accept trams and condition</span>
                  <button onClick={onRegister}>log in</button>
                  <h4 className="text-danger">{error}</h4>
                  <hr />
                  <p>Or Connect With</p>
                  <hr />
                  <ul>
                    <li
                      onClick={() => {
                        googleRedirect(googleprovider);
                      }}
                    >
                      <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />
                    </li>
                    {/* <li><i class="fab fa-twitter fa-2x"></i></li> */}
                    <li
                      onClick={() => {
                        googleRedirect(githubprovider);
                      }}
                    >
                      <img src="https://img.icons8.com/material-rounded/48/000000/github.png" />
                    </li>
                    {/* <li><i class="fab fa-linkedin-in fa-2x"></i></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={googleLogin}>google</button>
            <button onClick={githubLogin}>github</button> */}
      </div>
    </div>
  );
};

export default Registration;
