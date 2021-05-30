import React from 'react'
import _2 from "./../img/employee.svg";
import _4 from "./../img/sign-in.png";
import _3 from "./../img/CustomerRegister.png";
import _5 from "./../img/no-picture.png";
import _6 from "./../img/plus.svg";

function HelperProfileForm() {
    return (
        <>
            <form action="#">

                <div class="sign-up__start-section sign-up__individual-section active">
                    <p class='sign-up__section-label'>
                        WHO ARE YOU?
                </p>
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
                        <div style={{ marginBottom: "20px", textAlign: 'center' }}>
                            <div class="user-top-bar__img-container" style={{ maxWidth: '25em', display: 'inline-block' }}>
                                <div class="user-top-bar__img-wrap">
                                    <img src={_5} alt="" />
                                </div>
                                <button type='submit' class='avatar-add-btn'>
                                    <img src={_6} alt="add avatar" />
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* <p class='sign-up__section-label'>
                        Please fill out those fields to register yourself as a helper
                </p> */}
                    <div class='splited-col'>
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
                    <div class='custom-theme-select__container'>
                        Gender
                    <div class="custom-theme-select">
                            <select>
                                <option selected name="search-default">
                                    Male
                            </option>
                                <option>
                                    Male
                            </option>
                                <option>
                                    Female
                            </option>
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

                        <div class='custom-theme-select__container'>
                            Code
                    <div class="custom-theme-select">
                                <select>
                                    <option selected name="search-default">
                                        030
                            </option>
                                    <option>
                                        030
                            </option>
                                    <option>
                                        032
                            </option>
                                    <option>
                                        034
                            </option>
                                    <option>
                                        031
                            </option>
                                    <option>
                                        033
                            </option>
                                    <option>
                                        0355
                            </option>
                                </select>
                            </div>
                        </div>
                        <label>
                            Phone Number
                    <input type="number" />
                        </label>
                    </div>
                    <div class='custom-theme-select__container'>
                        City
                    <div class="custom-theme-select">
                            <select>
                                <option selected name="search-default">
                                    Islamabad
                            </option>
                                <option>
                                    Islamabad
                            </option>
                                <option>
                                    Karachi
                            </option>
                                <option>
                                    Lahore
                            </option>
                                <option>
                                    Rawalpindi
                            </option>
                            </select>
                        </div>
                    </div>
                    <label>
                        Password
                <input type="password" class='password-input' />
                        <p class='password-input__security-btn'>Show</p>
                    </label>
                    <label>
                        Confirm Password
                <input type="password" class='password-input' />
                        <p class='password-input__security-btn'>Show</p>
                    </label>
                    <button class="save-btn main-btn" onclick='redirectPay()'>
                        Sign Up
                    </button>
                    <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                </p>
                </div>

                <div class="sign-up__individual-section section-step sign-up-corporate">
                    <p class='sign-up__section-label'>
                        Please fill out those fields to register
                </p>
                    <div class='splited-col'>
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

                        <div class='custom-theme-select__container'>
                            Code
                    <div class="custom-theme-select">
                                <select>
                                    <option selected name="search-default">
                                        030
                            </option>
                                    <option>
                                        030
                            </option>
                                    <option>
                                        032
                            </option>
                                    <option>
                                        034
                            </option>
                                    <option>
                                        031
                            </option>
                                    <option>
                                        033
                            </option>
                                    <option>
                                        0355
                            </option>
                                </select>
                            </div>
                        </div>
                        <label>
                            Phone Number
                    <input type="number" />
                        </label>
                    </div>
                    <div class='custom-theme-select__container'>
                        City
                    <div class="custom-theme-select">
                            <select>
                                <option selected name="search-default">
                                    Islamabad
                            </option>
                                <option>
                                    Islamabad
                            </option>
                                <option>
                                    Karachi
                            </option>
                                <option>
                                    Lahore
                            </option>
                                <option>
                                    Rawalpindi
                            </option>
                            </select>
                        </div>
                    </div>
                    <label>
                        Address
                <input type="text" />
                    </label>
                    <label>
                        Password
                <input type="password" class='password-input' />
                        <p class='password-input__security-btn'>Show</p>
                    </label>
                    <label>
                        Confirm Password
                <input type="password" class='password-input' />
                        <p class='password-input__security-btn'>Show</p>
                    </label>
                    <button class="save-btn main-btn" onclick='redirectPay()'>
                        Sign Up
                </button>
                    <p class="auth-copyright">
                        Copy Rights Madadgar 2021, All Rights Reserved
                </p>
                </div>
            </form>

        </>
    )
}

export default HelperProfileForm
