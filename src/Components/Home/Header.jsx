import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../img/logo.png'
import {useCart} from '../CartContext'
import language from '../img/language.png'
const Header = ({ setShowCart }) => {
    const {cart} = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const currentPath = location.pathname;

    const handleLanguageSwitch = (language) => {
        const pathWithoutLanguage = location.pathname.split('/').slice(2).join('/');
        navigate(`/${language}/${pathWithoutLanguage}`);
    };

  return (
    <div>
            {/* <!-- Header Section Begin --> */}
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> {isKhmer ? 'សូមស្វាគមន៍មកកាន់គេហទំព័រយើងខ្ញុំ' : 'Welcome to our pages'}</li>
                                {/* <li>Free Shipping for all Order of $69</li> */}
                                <li><i class="fa fa-envelope"></i> {isKhmer ? 'ដឹកជញ្ជូនឥតគិតថ្លៃចាប់ពី 69$' : 'Free Shipping for all Order of $69'}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="header__top__right__language">
                                <div>{isKhmer ? 'Khmer' : 'English'}</div>
                                <span class="arrow_carrot-down"></span>
                                <ul >
                                    <li onClick={() => handleLanguageSwitch('en')} style={{color:'white'}}><a >English</a></li>
                                    <li onClick={() => handleLanguageSwitch('kh')} style={{ color: 'white' }}><a >ខ្មែរ</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#"><i class="fa fa-user"></i> {isKhmer ? 'ចូលគណនី' : 'Login'}</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <Link to="/home"><img src={logo} alt=""/></Link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li class={currentPath.includes('home') ? 'active' : ''}><Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដេីម' : 'Home'}</Link></li>
                            <li class={currentPath.includes('shop-grid') ? 'active' : ''}><Link to={`/${currentLanguage}/shop-grid`}>{isKhmer ? 'បញ្ជាទិញ' : 'Shop'}</Link></li>
                            <li class={currentPath.includes('shop-grid') ? 'active' : ''}><Link to={`/${currentLanguage}/blog`}>{isKhmer ? 'ប្លុក' : 'Blog'}</Link></li>
                            <li class={currentPath.includes('shop-grid') ? 'active' : ''}><Link to={`/${currentLanguage}/contact`}>{isKhmer ? 'ទំនាក់ទំនង' : 'Contact'}</Link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            {/* <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li> */}
                            <li><a href="#" onClick={() => setShowCart(true)}><i class="fa fa-shopping-bag"></i><span>{cart.length}</span></a></li>
                        </ul>
                        {/* <div class="header__cart__price">item: <span>$150.00</span></div> */}
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}
    </div>
  )
}

export default Header