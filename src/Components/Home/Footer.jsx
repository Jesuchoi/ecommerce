import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    <div>
        {/* <!-- Footer Section Begin --> */}
    <footer class="footer spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__about__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                        <div class="footer__widget">
                        <h6>Contact Us</h6>
                        <ul>
                            <li>Address: st25 44A, Chamkadoung, Phnom Penh City.</li>
                            <li>Phone: +855-15-599-555</li>
                            <li>Email: jesuchoi920@gmail.com</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div class="footer__widget">
                        <h6>Information</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Sitemap</a></li>
                        </ul>
                    </div>
                    <div class="footer__widget">
                        <h6>Customer Services</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Customer Service</a></li>
                            <li><a href="#">Orders & Returns</a></li>
                            <li><a href="#">Our Sitemap</a></li>
                            <li><a href="#">Help & FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail"/>
                            <button type="submit" class="site-btn">Subscribe</button>
                        </form>
                        <div class="footer__widget__social">
                            <h6>Stay Connected</h6>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__copyright">
                        <div class="footer__copyright__text"><p>
                          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  2024 &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Ecommerce Software  <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">LIM SOKMEY</a>
  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  </p></div>
                        <div class="footer__copyright__payment"><img src="img/payment-item.png" alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}
    </div>
  )
}

export default Footer