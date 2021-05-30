import React, { useEffect } from "react";
import "./../App";
import "./../style/auth.css";
import "./../style/normalize.css";
import "./../style/fonts.css";
import "./../style/variables.css";
import "./../style/text.css";
import "./../style/base.css";
import "./../style/home.css";
import "./../style/header.css";
import "./../style/top-bar.css";
import "./../style/footer.css";
import "./../style/inputs.css";
import "./../style/burger-menu.css";
import "./../style/media-queries.css";
import "./../style/pay.css";
import "./../style/payments.css";
import "./../style/select.css";
import "./../style/user.css";

import _1 from "./../img/logo.png";
import _4 from "./../img/sign-in.png";
import _2 from "./../img/employee.svg";
import _3 from "./../img/CustomerRegister.png";
import _5 from "./../img/no-picture.png";
import _6 from "./../img/plus.svg";

import HelperProfileForm from "./HelperProfileForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import { useState } from "react";

function Registration() {
  let [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <div id="full-page" class="auth">
      <header>
        <div class="top-bar user sticky">
          <div class="row top-bar__row">
            <div class="col-lg-2 col-md-2 col-3 pl-5 top-bar__row-col__logo">
              <a href="index.html">
                <img src={_1} alt="Logo" />
              </a>
            </div>
            <nav class="col-lg-7 col-md-8 col-12 top-bar__row-col__nav">
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
            <div class="col-lg-3 col-md-2 col-7 top-bar__row-col__auth">
              <a href="user.html" class="welcome-user">
                <img
                  src={_4}
                  alt="i"
                  style={{ width: "30px", height: "auto", marginLeft: "10px" }}
                />
              </a>
            </div>
          </div>
          <button class="burger-menu">
            <span></span>
          </button>
        </div>
      </header>

      <main class="auth-main sign-up-main">
        <div class="container">
          <div class="auth-main__row row">
            <div class="auth-main__row__left-col col-sm-6 col-12">
              <h1>
                Welcome, create new account and join <span> Madadgar </span>
              </h1>
            </div>

            <div class="auth-main__row__right-col col-sm-6 col-12">
              {page === 0 ? (
                <div>
                  <form action="#">
                    <div class="sign-up__start-section sign-up__individual-section active">
                      <p class="sign-up__section-label">WHO ARE YOU?</p>
                      <div class="sign-up__start-section__plan">
                        <div class="sign-up__start-section__plan-block individual active">
                          <div>
                            <img src={_2} alt="Employee" />
                          </div>
                          <p>Helper</p>
                        </div>
                        <div class="sign-up__start-section__plan-block corporate">
                          <div>
                            <img src={_3} alt="Employee" />
                          </div>
                          <p>Customer</p>
                        </div>
                      </div>
                      <button class="save-btn main-btn choose-account-btn">
                        Next
                      </button>
                      <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                      </p>
                    </div>

                    <div class="sign-up__individual-section section-step sign-up-individual">
                      <div class="user-top-bar">
                        <div
                          style={{ marginBottom: "20px", textAlign: "center" }}
                        >
                          <div
                            class="user-top-bar__img-container"
                            style={{
                              maxWidth: "25em",
                              display: "inline-block",
                            }}
                          >
                            <div class="user-top-bar__img-wrap">
                              <img src={_5} alt="" />
                            </div>
                            <button type="submit" class="avatar-add-btn">
                              <img src={_6} alt="add avatar" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <p class='sign-up__section-label'>
                        Please fill out those fields to register yourself as a helper
                </p> */}
                      <div class="splited-col">
                        <label>
                          First Name
                          <input type="text" />
                        </label>
                        <label>
                          Last Name
                          <input type="text" />
                        </label>
                      </div>
                      <label>
                        Date of Birth
                        <input type="date" id="birthday" name="birthday" />
                      </label>
                      <div class="custom-theme-select__container">
                        Gender
                        <div class="custom-theme-select">
                          <select>
                            <option selected name="search-default">
                              Male
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <label>
                        CNIC
                        <input type="text" />
                      </label>
                      <label>
                        Email Address
                        <input type="email" />
                      </label>

                      <div class="splited-col-1-5">
                        <div class="custom-theme-select__container">
                          Code
                          <div class="custom-theme-select">
                            <select>
                              <option selected name="search-default">
                                030
                              </option>
                              <option>030</option>
                              <option>032</option>
                              <option>034</option>
                              <option>031</option>
                              <option>033</option>
                              <option>0355</option>
                            </select>
                          </div>
                        </div>
                        <label>
                          Phone Number
                          <input type="number" />
                        </label>
                      </div>
                      <div class="custom-theme-select__container">
                        City
                        <div class="custom-theme-select">
                          <select>
                            <option selected name="search-default">
                              Islamabad
                            </option>
                            <option>Islamabad</option>
                            <option>Karachi</option>
                            <option>Lahore</option>
                            <option>Rawalpindi</option>
                          </select>
                        </div>
                      </div>
                      <label>
                        Password
                        <input type="password" class="password-input" />
                        <p class="password-input__security-btn">Show</p>
                      </label>
                      <label>
                        Confirm Password
                        <input type="password" class="password-input" />
                        <p class="password-input__security-btn">Show</p>
                      </label>
                      <button
                        onClick={() => setPage(1)}
                        class="save-btn main-btn"
                        // onclick="redirectPay()"
                      >
                        Next
                      </button>
                      <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                      </p>
                    </div>

                    <div class="sign-up__individual-section section-step sign-up-corporate">
                      <p class="sign-up__section-label">
                        Please fill out those fields to register
                      </p>
                      <div class="splited-col">
                        <label>
                          First Name
                          <input type="text" />
                        </label>
                        <label>
                          Last Name
                          <input type="text" />
                        </label>
                      </div>
                      <label>
                        Date of Birth
                        <input type="date" id="birthday" name="birthday" />
                      </label>
                      <label>
                        Email Address
                        <input type="email" />
                      </label>

                      <div class="splited-col-1-5">
                        <div class="custom-theme-select__container">
                          Code
                          <div class="custom-theme-select">
                            <select>
                              <option selected name="search-default">
                                030
                              </option>
                              <option>030</option>
                              <option>032</option>
                              <option>034</option>
                              <option>031</option>
                              <option>033</option>
                              <option>0355</option>
                            </select>
                          </div>
                        </div>
                        <label>
                          Phone Number
                          <input type="number" />
                        </label>
                      </div>
                      <div class="custom-theme-select__container">
                        City
                        <div class="custom-theme-select">
                          <select>
                            <option selected name="search-default">
                              Islamabad
                            </option>
                            <option>Islamabad</option>
                            <option>Karachi</option>
                            <option>Lahore</option>
                            <option>Rawalpindi</option>
                          </select>
                        </div>
                      </div>
                      <label>
                        Address
                        <input type="text" />
                      </label>
                      <label>
                        Password
                        <input type="password" class="password-input" />
                        <p class="password-input__security-btn">Show</p>
                      </label>
                      <label>
                        Confirm Password
                        <input type="password" class="password-input" />
                        <p class="password-input__security-btn">Show</p>
                      </label>
                      <button
                        class="save-btn main-btn"
                        onClick={() => setPage(1)}
                      >
                        Next
                      </button>
                      <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                      </p>
                    </div>
                  </form>
                </div>
              ) : null}

              {/* form2  */}

              {page === 1 ? (
                <div>
                  <form action="#">
                    <div class="sign-up__individual-section section-step sign-up-individual active">
                      <p class="sign-up__section-label">
                        Enter your educational background.
                      </p>

                      {/* education cards */}

                      <div class="edu-card">
                        <p class="institute">
                          {" "}
                          National University of Science and Technology{" "}
                        </p>
                        <p class="degree"> Masters in Computer Science</p>
                        <p class="year "> 2016 - 2018 </p>

                        <div
                          class="close-btn"
                          onClick={() => {
                            console.log(page);
                          }}
                        >
                          x
                        </div>
                      </div>
                      <div class="edu-card">
                        <div>
                          <p class="institute">
                            {" "}
                            Comsats University Islamabad{" "}
                          </p>
                          <p class="degree"> Bachelor of Computer Science</p>
                          <p class="year"> 2012 - 2016</p>
                        </div>

                        <button class="close-btn" onclick="">
                          x
                        </button>
                      </div>
                      <div class="splited-col" style={{ marginTop: "5px" }}>
                        <label>
                          Institute
                          <input type="text" />
                        </label>
                        <label>
                          Degree
                          <input type="text" />
                        </label>
                      </div>
                      <div class="splited-col">
                        <label>
                          From
                          <input
                            type="Number"
                            value="2021"
                            style={{ maxWidth: "40%" }}
                          />
                        </label>
                        <label>
                          Till
                          <input type="Number" style={{ maxWidth: "40%" }} />
                        </label>
                      </div>
                      <div class="splited-col">
                        <button class="save-btn main-btn" onclick="">
                          Add
                        </button>
                        <button
                          class="save-btn main-btn"
                          onClick={() => setPage(2)}
                          style={{ maxWidth: "35%", marginLeft: "5%" }}
                        >
                          Next
                        </button>
                      </div>

                      <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                      </p>
                    </div>
                  </form>
                </div>
              ) : null}

              {page === 2 ? (
                <div>
                  <form action="#">
                    <div class="sign-up__individual-section section-step sign-up-individual active">
                      <p class="sign-up__section-label">Enter your Skills.</p>

                      {/* skill cards */}
                      <div class="skills-container">
                        <div class="skill-card">
                          <p class="skill">Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                        <div class="skill-card">
                          <p class="skill">Driving Driving Driving </p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                        <div class="skill-card">
                          <p class="skill">Driving Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                        <div class="skill-card">
                          <p class="skill">Driving Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>{" "}
                        <div class="skill-card">
                          <p class="skill">Driving Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>{" "}
                        <div class="skill-card">
                          <p class="skill">Driving Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>{" "}
                        <div class="skill-card">
                          <p class="skill">Driving Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                        <div class="skill-card">
                          <p class="skill">Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                        <div class="skill-card">
                          <p class="skill">Driving</p>
                          <button class="close-btn" onclick="">
                            x
                          </button>
                        </div>
                      </div>
                      <label>
                        Skill
                        <input type="text" />
                      </label>

                      <div class="splited-col">
                        <button class="save-btn main-btn" onclick="">
                          Add
                        </button>
                        <button
                          class="save-btn main-btn"
                          style={{ maxWidth: "35%", marginLeft: "5%" }}
                        >
                          Next
                        </button>
                      </div>

                      <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                      </p>
                    </div>
                  </form>
                </div>
              ) : null}

              {/* <EducationForm></EducationForm> */}
              {/* <SkillsForm> </SkillsForm> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Registration;
