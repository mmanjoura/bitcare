import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Link } from 'react-router-dom'

const header = () => {
    return(
        <Aux>
            <header className="header header--sticky">
                <div className="header-line hidden-xs">
                <div className="container">
                    <div className="pull-left">
                    <div className="social-links social-links--colorize">
                        <ul>
                        <li className="social-links__item"><a className="icon icon-facebook" href="#" /></li>
                        <li className="social-links__item"><a className="icon icon-twitter" href="#" /></li>
                        <li className="social-links__item"><a className="icon icon-google" href="#" /></li>
                        <li className="social-links__item"><a className="icon icon-pinterest" href="#" /></li>
                        <li className="social-links__item"><a className="icon icon-mail" href="#" /></li>
                        </ul>
                    </div>
                    </div>
                    <div className="pull-right">
                    <div className="user-links">
                        <ul>
                        <li className="user-links__item"><Link to="/login">Sign In</Link></li>
                        <li className="user-links__item"><Link to="/register">Register</Link></li>
                        <li className="user-links__item user-links__item--separate"><a href="#" className="color-twitter">TWITTER</a> / <a href="#" className="color-facebook">FACEBOOK</a> LOGIN</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="header__dropdowns-container">
                <div className="header__dropdowns">
                    <div className="header__search pull-left"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button search-open"><span className="icon icon-search" /></a> </div>
                    <div className="header__cart pull-left"><span className="header__cart__indicator hidden-xs">$0.00</span>
                    <div className="dropdown pull-right"><a href="#" className="btn dropdown-toggle btn--links--dropdown header__cart__button header__dropdowns__button" data-toggle="dropdown"><span className="icon icon-bag-alt" /><span className="badge badge--menu">2</span></a>
                        <div className="dropdown-menu animated fadeIn shopping-cart" role="menu">
                        <div className="shopping-cart__settings"><a href="#" className="icon icon-gear" /></div>
                        <div className="shopping-cart__top text-uppercase">Your Cart(2)</div>
                        <ul>
                            <li className="shopping-cart__item">
                            <div className="shopping-cart__item__image pull-left"><a href="#"><img src="images/products/product.jpg" /></a></div>
                            <div className="shopping-cart__item__info">
                                <div className="shopping-cart__item__info__title">
                                <h2 className="text-uppercase"><a href="#">Fast Seconds Knit White</a></h2>
                                </div>
                                <div className="shopping-cart__item__info__option">Color: Blue</div>
                                <div className="shopping-cart__item__info__option">Size: Small</div>
                                <div className="shopping-cart__item__info__price">$84.00</div>
                                <div className="shopping-cart__item__info__qty">Qty:1</div>
                                <div className="shopping-cart__item__info__delete"><a href="#" className="icon icon-clear" /></div>
                            </div>
                            </li>
                            <li className="shopping-cart__item">
                            <div className="shopping-cart__item__image pull-left"><a href="#"><img src="images/products/product.jpg"  /></a></div>
                            <div className="shopping-cart__item__info">
                                <div className="shopping-cart__item__info__title">
                                <h2 className="text-uppercase"><a href="#">Fast Seconds Knit White</a></h2>
                                </div>
                                <div className="shopping-cart__item__info__option">Color: Blue</div>
                                <div className="shopping-cart__item__info__option">Size: Small</div>
                                <div className="shopping-cart__item__info__price">$84.00</div>
                                <div className="shopping-cart__item__info__qty">Qty:1</div>
                                <div className="shopping-cart__item__info__delete"><a href="#" className="icon icon-clear" /></div>
                            </div>
                            </li>
                        </ul>
                        <div className="shopping-cart__bottom">
                            <div className="pull-left">Subtotal: <span className="shopping-cart__total"> $130.00</span></div>
                            <div className="pull-right">
                            <button className="btn btn--wd text-uppercase">Checkout</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="dropdown pull-right"> <a href="#" className="btn dropdown-toggle btn--links--dropdown header__dropdowns__button" data-toggle="dropdown"><span className="icon icon-dots" /></a>
                    <ul className="dropdown-menu ul-row animated fadeIn" role="menu">
                        <li className="li-col currency">
                        <h4>Currency</h4>
                        <ul>
                            <li className="currency__item active"><a href="#"><span>$</span>US Dollar</a></li>
                            <li className="currency__item"><a href="#"><span>€</span>Euro</a></li>
                            <li className="currency__item"><a href="#"><span>£</span>British Pound</a></li>
                            <li className="currency__item"><a href="#"><span>¥</span>Japanese Yen</a></li>
                            <li className="currency__item"><a href="#"><span>₹</span>Indian Rupee</a></li>
                        </ul>
                        </li>
                        <li className="li-col languages languages--flag">
                        <h4>Language</h4>
                        <ul>
                            <li className="languages__item active"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/gb.png"  /></span><span className="languages__item__label">En</span></a></li>
                            <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/de.png"  /></span><span className="languages__item__label">De</span></a></li>
                            <li className="languages__item"><a href="#"><span className="languages__item__flag flag"><img src="images/flags/fr.png"  /></span><span className="languages__item__label">Fr</span></a></li>
                        </ul>
                        </li>
                        <li className="li-col list-user-menu">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Compare</a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <nav className="navbar navbar-wd" id="navbar">
                <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" id="slide-nav"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                {/*  Logo  */} 
                <a className="logo" href="index.html"> 
                <img className="logo-default" src="images/logo1.jpg"/> 
                <img className="logo-mobile" src="images/logo1.jpg"  /> 
                <img className="logo-transparent" src="images/logo-transparent.png"  /> </a> 
                {/* End Logo */} 
                </div>
                <div className="pull-left search-focus-fade" id="slidemenu">
                <div className="slidemenu-close visible-xs">✕</div>
                <ul className="nav navbar-nav">     
                    <li> <a href="index.html" className="dropdown-toggle"><span className="link-name">Home</span><span className="caret caret--dots" /></a>
                    <ul className="dropdown-menu animated fadeIn" role="menu">
                        <li><a href="index-layout1.html">SwimWear Layout</a></li>
                        <li><a href="index-layout2.html">Flowers Layout</a></li>
                        <li><a href="index-layout3.html">Travel Layout</a></li>
                        <li><a href="index-layout4.html">IShop Layout</a></li>
                        <li><a href="index-layout5.html">Medicine Layout</a></li>
                        <li><a href="index-layout6.html">Gifts Store Layout</a></li>
                        <li><a href="index-layout7.html">Toy Store Layout</a></li>
                        <li><a href="index-layout8.html">Sport Layout</a></li>
                    </ul>
                    </li>
                    <li> <a href="index.html" className="dropdown-toggle"><span className="link-name">Layouts</span><span className="caret caret--dots" /></a>
                    <ul className="dropdown-menu animated fadeIn" role="menu">
                        <li><a href="index.html">Default</a></li>
                        <li><a href="index-boxed.html">Boxed</a></li>
                        <li><a href="index-full.html">FullWidth</a></li>
                        <li><a href="index-tranparent-header.html">Transparent Header</a></li>
                        <li><a href="index-landing-banners.html">Landing Banners</a></li>
                        <li><a href="index-landing-category.html">Landing Category</a></li>
                        <li><a href="index-landing-content.html">Landing Content</a></li>
                        <li><a href="index-vertical-megamenu.html">Vertical Megamenu</a></li>
                        <li><a href="index-art-catalogue.html">Art catalogue</a></li>
                        <li><a href="index-original.html">Original</a></li>
                        <li><a href="index-intro.html">Intro</a></li>
                        <li><a href="lookbook.html">Lookbook</a></li>
                        <li><a href="index-layout1.html">SwimWear Layout</a></li>
                        <li><a href="index-layout2.html">Flowers Layout</a></li>
                        <li><a href="index-layout3.html">Travel Layout</a></li>
                        <li><a href="index-layout4.html">IShop Layout</a></li>
                        <li><a href="index-layout5.html">Medicine Layout</a></li>
                        <li><a href="index-layout6.html">Gifts Store Layout</a></li>
                        <li><a href="index-layout7.html">Toy Store Layout</a></li>
                        <li><a href="index-layout8.html">Sport Layout</a></li>
                    </ul>
                    </li>
                    <li><a href="blog.html" className="dropdown-toggle"><span className="link-name">BLOG</span><span className="caret caret--dots" /></a>
                    <ul className="dropdown-menu animated fadeIn" role="menu">
                        <li><a href="blog.html">Blog Posts</a></li>
                        <li><a href="blogpost.html">Blog Post</a></li>
                        <li><a href="blog-right-column.html">Blog With Column</a></li>
                    </ul>
                    </li>
                    <li><a href="listing.html" className="dropdown-toggle"><span className="link-name">SHOP</span><span className="caret caret--dots" /></a>
                    <ul className="dropdown-menu animated fadeIn" role="menu">
                        <li><a href="listing.html">Listing</a></li>
                        <li><a href="listing-open-filter.html">Listing Left Column</a></li>
                        <li><a href="product.html">Product Default</a></li>
                        <li><a href="product-sticky.html">Product Sticky Info</a></li>
                        <li><a href="product-simple.html">Product Simple</a></li>
                    </ul>
                    </li>
                    <li className="menu-large"><a href="listing.html" className="dropdown-toggle"><span className="link-name">CATEGORY</span><span className="caret caret--dots" /></a>
                    <div className="dropdown-menu megamenu animated fadeIn">
                        <div className="container">
                        <ul className="megamenu__columns">
                            <li className="megamenu__columns__top-block text-uppercase">
                            <ul>
                                <li><span className="icon icon-box icon--lg" /><a href="#">GIFTS EXCLUSIVE</a></li>
                                <li><span className="icon icon-sales- icon--lg" /><a href="#">OFFERS</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Coats</a></li>
                                <li className="level2"><a href="listing.html">Club Dresses</a>
                                <ul className="level-menu__dropdown">
                                    <li className="level3"><a href="listing.html">Empty subcategory #1</a>
                                    <ul className="level-menu__dropdown">
                                        <li className="level3"><a href="listing.html">Empty subcategory #1-1</a></li>
                                        <li className="level3"><a href="listing.html">Empty subcategory #1-2</a></li>
                                        <li className="level3"><a href="listing.html">Empty subcategory #1-3</a></li>
                                        <li className="level3"><a href="listing.html">Empty subcategory #1-4</a></li>
                                        <li className="level3"><a href="listing.html">Empty subcategory #1-5</a></li>
                                    </ul>
                                    </li>
                                    <li className="level3"><a href="listing.html">Empty subcategory #2</a></li>
                                    <li className="level3"><a href="listing.html">Empty subcategory #3</a></li>
                                </ul>
                                </li>
                                <li className="level2"><a href="listing.html">Evening Dresses</a></li>
                                <li className="level2"><a href="listing.html">Prom Dresses</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Dresses</a><span className="badge badge--squared">NEW</span></li>
                                <li className="level2"><a href="listing.html">Empty category #1</a></li>
                                <li className="level2"><a href="listing.html">Empty category #2</a></li>
                                <li className="level2"><a href="listing.html">Empty category #3</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Jackets</a></li>
                                <li className="level2"><a href="listing.html">Empty category #4</a></li>
                                <li className="level2"><a href="listing.html">Empty category #5</a></li>
                                <li className="level2"><a href="listing.html">Empty category #6</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Jeans</a></li>
                                <li className="level2"><a href="listing.html">Empty category #7</a></li>
                                <li className="level2"><a href="listing.html">Empty category #8</a></li>
                                <li className="level2"><a href="listing.html">Empty category #9</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Jumpsuits</a></li>
                                <li className="level2"><a href="listing.html">Empty category #10</a></li>
                                <li className="level2"><a href="listing.html">Empty category #11</a></li>
                                <li className="level2"><a href="listing.html">Empty category #12</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Lingerie</a></li>
                                <li className="level2"><a href="listing.html">Empty category #13</a></li>
                                <li className="level2"><a href="listing.html">Empty category #14</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Pants</a><span className="badge badge--squared badge--color-">-10%</span></li>
                                <li className="level2"><a href="listing.html">Empty category #15</a></li>
                                <li className="level2"><a href="listing.html">Empty category #16</a></li>
                                <li className="level2"><a href="listing.html">Empty category #17</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Shorts</a></li>
                                <li className="level2"><a href="listing.html">Empty category #18</a></li>
                                <li className="level2"><a href="listing.html">Empty category #19</a></li>
                                <li className="level2"><a href="listing.html">Empty category #20</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Skirts</a></li>
                                <li className="level2"><a href="listing.html">Empty category #21</a></li>
                                <li className="level2"><a href="listing.html">Empty category #22</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Sweaters</a></li>
                            </ul>
                            </li>
                            <li className="level-menu level1">
                            <ul>
                                <li className="title"><a href="listing.html">Tops</a></li>
                            </ul>
                            </li>
                            <li className="megamenu__columns__bottom-block text-uppercase">
                            <ul>
                                <li><span className="icon icon-bag icon--lg" /><a href="#">SPECIAL OFFER</a></li>
                                <li><span className="icon icon-shop-label icon--lg" /><a href="#">UP TO 50% OFF DISCOUNTS</a></li>
                            </ul>
                            </li>
                            <li className="megamenu__columns__side-image"><img src="images/img-megamenu.jpg" alt="Megamenu Image" /> </li>
                        </ul>
                        </div>
                    </div>
                    </li>
                    <li><a href="gallery.html" className="wave"><span className="link-name">Gallery</span></a></li>
                    <li><a href="about.html" className="dropdown-toggle"><span className="link-name">Pages</span><span className="badge badge--menu">!</span><span className="caret caret--dots" /></a>
                    <ul className="dropdown-menu animated fadeIn" role="menu">
                        <li><a href="about.html">About</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="sitemap.html">Sitemap</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="create-account.html">Create Account</a></li>
                        <li><a href="logination.html">Logination</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </header>
        </Aux>
    )
};

export default header;