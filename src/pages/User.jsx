
import '../App'
import './../style/auth.css'
import './../style/normalize.css'
import './../style/fonts.css'
import './../style/variables.css'
import './../style/text.css'
import './../style/base.css'
import './../style/home.css'
import './../style/header.css'
import './../style/top-bar.css'
import './../style/footer.css'
import './../style/inputs.css'
import './../style/burger-menu.css'
import './../style/media-queries.css'
import './../style/pay.css'
import './../style/payments.css'
import './../style/select.css'
import './../style/user.css'


import _1 from "./../img/logo2.png";
import _2 from "./../img/sign-in.png";
import _3 from "./../img/people-image.jpg";
import _4 from "./../img/plus.svg";


function User() {
    return (
        <div class='user'>

    <header >
        <div class="top-bar user sticky">
                <div class="row top-bar__row">
                    <div class="col-lg-2 col-md-2 col-3 pl-5 top-bar__row-col__logo">
                        <a href="index.html"><img src={_1} alt="Logo"/></a>
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
                        <a href='user.html' class="welcome-user">
                           Ahmed
                           <img src={_2} style={{width: "30px", height: "auto", marginLeft: "10px"}}/>
                        </a>
                        
                    </div>
                </div>
                <button class="burger-menu">
                    <span></span>
                </button>
            </div>
    </header>


    <div class="user-top-bar">
        <div class="container">
            <div class="user-top-bar__wrap">
                <div class="d-flex">
                    <form action="#">
                        <div class="d-flex flex-column to">
                            <div class="user-top-bar__img-container">
                                <div class="user-top-bar__img-wrap">
                                    <img src={_3} alt=""/>
                                </div>
                                <button type='submit' class='avatar-add-btn'>
                                    <img src={_4} alt="add avatar"/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="d-flex flex-column top-bar__user-info">
                        <span class="user-main-span user-top-bar__name">
                            Ahmed Mahmood
                        </span>
                        <p style={{color: '#2575c0'}}>
                            22 years old
                        </p>
                        <p>
                            Rating : 4.1
                        </p>
                        <p>
                            From Islamabad
                        </p>
                        <p>
                            Member Since 2011  
                        </p>
                        <p style={{fontStyle: "italic", fontWeight: "50", fontFamily:'Segoe UI', color: '#2575c0'}}>
                            Certified
                        </p>
                        
                    </div>
                </div>
                <div class="d-flex update-profile-btn__col">
                    <button class="update-profile-btn">
                        Update profile
                    </button>
                </div>
            </div>
        </div>
    </div>


    <main class="main">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 user-main-left-col col-md-6 col-12">
                    <div class='user-main__left-col'>
                        <span class="user-main-span">
                            Profile
                        </span>
                        <p class='pt-5 pb-0 d-flex justify-content-between align-items-center'>
                            Joined : 1/4/2020
                            <button class="cancel-subscription-btn">
                                Message
                            </button>
                        </p>
                        <p>
                            Jobs Done: 53
                        </p>
                        <p>
                            Job Success: 98%
                        </p>
                        <p>
                            Avg Response Time: 2 Hours
                        </p>
                        <p>
                            Contact : 0331-9658958
                        </p>
                        <p>
                            Email : mahmood@gmail.com
                        </p>
                        <div class="user-main__hr"></div>
                        <span class="user-main-span" >
                            Education
                        </span>
                        <div class = "edu-back"> 
                            <p class = 'institute'> National University of Science and Technology </p>
                            <p class = 'degree'> Masters in Computer Science</p>
                            <p class = 'year '> 2016 - 2018</p>
                        </div>
                        <div class = "edu-back" > 
                            <p class = 'institute'> Comsats University Islamabad </p>
                            <p class = 'degree'> Bachelor of Computer Science</p>
                            <p class = 'year'> 2012 - 2016</p>
                        </div>
                        <div class = "edu-back" > 
                            <p class = 'institute'> Army Public School </p>
                            <p class = 'degree'> Matric/Fsc</p>
                            <p class = 'year'> 2000 - 2012</p>
                        </div>
                        <div class="user-main__hr"></div>
                        <span class="user-main-span" >
                            Skills
                        </span>
                        <br/><br/>
                            <div class="skillnode">
                                Tutoring
                            </div><div class="skillnode">
                                Driving
                            </div><div class="skillnode">
                                Babysitting
                            </div><div class="skillnode">
                                Circuit Fixing
                            </div><div class="skillnode">
                                Grocery Picking
                            </div><div class="skillnode">
                                Car Washing
                            </div><div class="skillnode">
                                Carpenting
                            </div><div class="skillnode">
                                Painting
                            </div><div class="skillnode">
                                Sketching
                            </div><div class="skillnode">
                                Fitness Coaching
                            </div>
                            <div class="user-main__hr"></div>
                            <span class="user-main-span" >
                                Languages
                            </span>
                            <br/><br/>
                            <div class="skillnode">
                                English
                            </div><div class="skillnode">
                                Urdu
                            </div><div class="skillnode">
                                Punjabi
                            </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6 col-12 user-main-right-col pr-0">
                    <div class="user-main__right-col">
                        <div class="d-flex justify-content-between">
                            <span class="user-main-span">
                                Reviews
                            </span>
                        </div>
                        
                        <div class="user-main__message">
                            <div class="user-top-bar__img-container">
                                    <img class = "user-review-img" src={_3} alt=""/>
                            </div>
                            <div class="user-main__message-header">
                                <span class="user-main__message__span">
                                    Ahmed Qureshi
                                </span>
                                <span class="user-main__message__date">
                                    22 Apr 2020
                                </span>
                            </div>
                            <p class="user-main__message-paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s
                            </p>
                            <div class="user-main__message-footer">
                            </div>
                        </div>
                        <div class="user-main__hr"></div>
                        <div class="user-main__message">
                            <div class="user-top-bar__img-container">
                                    <img class = "user-review-img"  src={_3} alt=""/>
                            </div>
                            <div class="user-main__message-header">
                                <span class="user-main__message__span">
                                    Ahmed Qureshi
                                </span>
                                <span class="user-main__message__date">
                                    22 Apr 2020
                                </span>
                            </div>
                            <p class="user-main__message-paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s
                            </p>
                            <div class="user-main__message-footer">
                            </div>
                        </div>
                        <div class="user-main__hr"></div>
                        <div class="user-main__message">
                            <div class="user-top-bar__img-container">
                                    <img class = "user-review-img"  src={_3} alt=""/>
                            </div>
                            <div class="user-main__message-header">
                                <span class="user-main__message__span">
                                    Ahmed Qureshi
                                </span>
                                <span class="user-main__message__date">
                                    22 Apr 2020
                                </span>
                            </div>
                            <p class="user-main__message-paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s
                            </p>
                            <div class="user-main__message-footer">
                            </div>
                        </div>
                        <div class="user-main__hr"></div>
                      
                        <div style={{textAlign: 'center'}}> 
                            <button class="user-main__message__reply">
                                View All
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    )
}

export default User
