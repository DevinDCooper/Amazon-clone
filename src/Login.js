import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__cintainer">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />

          <h5>password</h5>
          <input type="password" />
          <button>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          Sale. Please see our Privacy Notice, pur Cookies Notice and our
          Interest-Based Ads Notice
        </p>
      </div>
    </div>
  );
}

export default Login;
