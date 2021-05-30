import React from "react";
import signIn from "./../img/sign-in.png";
import logo from "./../img/logo2.png";

import { useState } from "react";

const validateEmail = (data) => {
  if (
    data.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};
const validatePassword = (data) => {
  if (
    data.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const valdiateForm = (email, password) => {
  if (validatePassword(password) === true && validateEmail(email) === true) {
    return true;
  } else {
    return false;
  }
};
const Login = (props) => {
  let [emails, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="auth">
      <header className="header" id="home">
        <div className="top-bar">
          <div className="row top-bar__row" id="sigin">
            <div className="col-lg-2 col-md-2 col-3 pl-md-5 pl-0 top-bar__row-col__logo">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <nav className="col-lg-8 col-md-8 col-12 top-bar__row-col__nav">
              <ul>
                <li>
                  <a href="index.html#home">Home</a>
                </li>
                <li>
                  <a href="index.html#who-we-are">About us</a>
                </li>
                <li>
                  <a href="index.html#masonry-gallery">What we do</a>
                </li>
                <li>
                  <a href="index.html#services">Services</a>
                </li>
                <li>
                  <a href="index.html#why-ids">Why IDS</a>
                </li>
                <li>
                  <a href="index.html#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="index.html#clients-feedback">Clients</a>
                </li>
                <li>
                  <a href="index.html#contact-us">Contact us</a>
                </li>
              </ul>
            </nav>
            <div className="col-lg-2 col-md-2 col-8 pr-5 d-flex text-right flex-column top-bar__row-col__auth">
              <a href="sign-in.html" className="sign-in-btn">
                <img
                  src={signIn}
                  alt="sign_BG_image"
                  style={{ width: "30px", height: "auto" }}
                />
              </a>
            </div>
          </div>
          <button className="burger-menu">
            <span></span>
          </button>
        </div>
      </header>

      <main className="auth-main sign-in-main">
        <div className="container">
          <div className="auth-main__row row">
            <div
              className="auth-main__row__left-col col-sm-7 col-12"
              id="borders"
            >
              <h1>
                Welcome, Sign in to join <span className="ids">Madadgar</span>{" "}
              </h1>
            </div>
            <div className="auth-main__row__right-col col-sm-5 col-12">
              <form action="#">
                <label>
                  <label>
                    Email Address
                    <input
                      onChange={(event) => {
                        validateEmail(event.target.value) === true
                          ? setEmail(event.target.value)
                          : setEmail(event.target.value);
                      }}
                      type="email"
                      name="email"
                      required
                      style={{
                        border:
                          emails === ""
                            ? ""
                            : validateEmail(emails) === true
                            ? "solid 1px #707070"
                            : "1px solid red",
                      }}
                    />
                  </label>
                  <label>
                    Password
                    <input
                      onChange={(event) =>
                        validatePassword(event.target.value) === true
                          ? setPassword(event.target.value)
                          : setPassword(event.target.value)
                      }
                      type="password"
                      className="password-input"
                      name="password"
                      required
                      style={{
                        border:
                          password === ""
                            ? ""
                            : validatePassword(password) === true
                            ? "solid 1px #707070"
                            : "1px solid red",
                      }}
                    />
                    <p className="password-input__security-btn">Show</p>
                  </label>
                  <button className="sign-in-btn main-btn">Sign in</button>
                  <button className="forget-password">Forget password?</button>
                </label>
              </form>
              <div className="different-auth">
                <span>
                  If you don't have an account, Please create an account below
                </span>
                <a
                  href="sign-up.html"
                  className="main-btn_transparent sign-up-btn"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
