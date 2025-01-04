import React from 'react'
import { useLocation } from 'react-router-dom';


const Hero = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
        {/* <!-- Hero Section Begin --> */}
    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                {isKhmer ? 'ទាំងអស់' : 'All'}
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder={isKhmer ? 'តើអ្នកត្រូវការអ្វី ?' : 'What do you need?'}/>
                                <button type="submit" class="site-btn">{isKhmer ? 'ស្វែងរក' : 'SEARCH'}</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+855-15-599-555</h5>
                                <span>{isKhmer ? 'គាំទ្រ 24/7 ម៉ោង' : 'support 24/7 time'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End --> */}
    </div>
  )
}

export default Hero