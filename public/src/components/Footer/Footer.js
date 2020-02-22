import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const footer = () => {

    return (
        <Aux>
            <footer className="footer">
            <div className="footer__links hidden-xs">
            <div className="container">
                <div className="row">
                <div className="col-sm-6">
                    <div className="h-links-list">
                    <ul>
                        <li><a href="#">Site Map</a></li>
                        <li><a href="#">Search Terms</a></li>
                        <li><a href="#">Orders and Returns</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">RSS</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-links-list text-right">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer__column-links">
            <div className="back-to-top"> <a href="#top" className="btn btn--round btn--round--lg"><span className="icon-arrow-up" /></a></div>
            <div className="container">
                <div className="row">
                <div className="col-md-3 hidden-xs hidden-sm"> 
                    {/*  Logo  */} 
                    <a className="logo logo--footer" href="index.html"> <img src="images/logo-transparent.png"  /> </a> 
                    {/* End Logo */} 
                    <p>This is one of the best, most attractive and smartest templates on the market. <strong><em>- Adam Smith</em></strong></p>
                </div>
                <div className="col-sm-3 col-md-2 mobile-collapse">
                    <h5 className="title text-uppercase mobile-collapse__title">Information </h5>
                    <div className="v-links-list mobile-collapse__content">
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Shipping &amp; Returns</a></li>
                        <li><a href="about.html">Privacy Notice</a></li>
                        <li><a href="about.html">Conditions of Use</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-2 mobile-collapse">
                    <h5 className="title text-uppercase mobile-collapse__title">Service</h5>
                    <div className="v-links-list mobile-collapse__content">
                    <ul>
                        <li><a href="contact.html">Online support</a></li>
                        <li><a href="faq.html">Help &amp; FAQs</a></li>
                        <li><a href="contact.html">Call Center</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-2 mobile-collapse">
                    <h5 className="title text-uppercase mobile-collapse__title">My account</h5>
                    <div className="v-links-list mobile-collapse__content">
                    <ul>
                        <li><a href="account.html">My Account</a></li>
                        <li><a href="account-order.html">Order history</a></li>
                        <li><a href="account-address.html">My Addresses</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3 mobile-collapse mobile-collapse--last">
                    <h5 className="title text-uppercase mobile-collapse__title">Company Info</h5>
                    <div className="v-links-list mobile-collapse__content">
                    <ul>
                        <li className="icon icon-home">7563 St. Vincent Place, Glasgow</li>
                        <li className="icon icon-telephone">321321321, 321321321</li>
                        <li className="icon icon-mail"><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                        <li className="icon icon-skype"><a href="#">shop.test</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer__subscribe">
            <div className="container">
                <div className="row">
                <div className="col-sm-7 col-md-6">
                    <div id="subscribeSuccess">
                    <p>Your email was added successfully!</p>
                    </div>
                    <div id="subscribeError">
                    <p>Something went wrong, try refreshing and submitting the form again.</p>
                    </div>                
                    <form id="subscribe-form" className="subscribe-form" method="post" noValidate>
                    <label className="subscribe-form__label text-uppercase pull-left">Subscribe</label>
                    <input type="text" className="subscribe-form__input input--wd" placeholder="Your e-mail address" name="subscribemail" />
                    <button type="submit" className="btn btn--wd text-uppercase wave"><span className="hidden-xs">Subscribe</span><span className="icon icon-mail-fill visible-xs" /></button>
                    </form>
                </div>
                <div className="col-sm-5 col-md-6">
                    <div className="social-links social-links--colorize social-links--large">
                    <ul>
                        <li className="social-links__item"><a className="icon icon-facebook" href="http://www.facebook.com/" /></li>
                        <li className="social-links__item"><a className="icon icon-twitter" href="http://www.twitter.com/" /></li>
                        <li className="social-links__item"><a className="icon icon-google" href="http://www.google.com/" /></li>
                        <li className="social-links__item"><a className="icon icon-pinterest" href="http://www.pinterest.com/" /></li>
                        <li className="social-links__item"><a className="icon icon-mail" href="mailto:mail@google.com" /></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer__settings visible-xs">
            <div className="container text-center">
                <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false"><span className="header__dropdowns__button__symbol">$</span></a>
                <ul className="dropdown-menu animated fadeIn" role="menu">
                    <li className="currency__item currency__item--active"><a href="#">$ USA Dollar</a></li>
                    <li className="currency__item"><a href="#">€ Euro</a></li>
                    <li className="currency__item"><a href="#">£ British Pound</a></li>
                </ul>
                </div>
                <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false"><span className="flag"><img src="images/flags/gb.png"  /></span></a>
                <ul className="dropdown-menu animated fadeIn languages languages--flag" role="menu">
                    <li className="languages__item languages__item--active"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/gb.png"  /></span><span className="languages__item__label">En</span></a></li>
                    <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/de.png"  /></span><span className="languages__item__label">De</span></a></li>
                    <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/fr.png"  /></span><span className="languages__item__label">Fr</span></a></li>
                </ul>
                </div>
                <div className="dropdown pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown" aria-expanded="false">Account</a>
                <ul className="dropdown-menu animated fadeIn" role="menu">
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Compare</a></li>
                    <li><a href="#">Checkout</a></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="footer__bottom">      
            <div className="container">
                <div className="pull-left text-uppercase">© 2016 <a href="#">Welldone :)</a>. All Rights Reserved. </div>
                <div className="pull-right text-uppercase text-right">with love <span className="icon-favorite color-heart" /> from <a href="http://themeforest.net/user/etheme">etheme</a></div>
            </div>
            </div>
        </footer>
    </Aux>
    )
};

export default footer;