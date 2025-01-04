import React, {useEffect} from 'react'
import banner from '../img/hero/banner.jpg'
import { useLocation } from 'react-router-dom';
const Hero = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach((element) => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, []);
  return (
    <div>
        {/* <!-- Hero Section Begin --> */}
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            {/* <span>All departments</span> */}
                            <span>{isKhmer ? 'ប្រភេទផលិតផល' : 'Category'}</span>

                        </div>
                        <ul>
                            <li><a href="#">{isKhmer ? 'សម្លៀកបំពាក់បុរស' : ' Men`s clothing '}</a></li>
                            <li><a href="#">{isKhmer ? 'សម្លៀកបំពាក់នារី' : 'Women`s clothing'}</a></li>
                            <li><a href="#">{isKhmer ? 'គ្រឿងអេឡិចត្រូនិច' : 'Electronic'}</a></li>
                            <li><a href="#">{isKhmer ? 'គ្រឿងអលង្ការ' : 'Jewelery'}</a></li>
                        </ul>
                    </div>
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
                                {/* <span>support 24/7 time</span> */}
                                <span>{isKhmer ? 'គាំទ្រ 24/7 ម៉ោង' : 'support 24/7 time'}</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero__item set-bg" data-setbg={banner}>
                        <div class="hero__text">
                            <span>{isKhmer ? 'ម៉ូដទទួលបានការចាប់អារម្មណ៍,' : 'Fashion gets attention,'}</span>
                            <h2>OGANI <br />STORE</h2>
                            <p>{isKhmer ? 'អាចមកយកផ្ទាល់ និង ដឹកជញ្ជូនឥតគិតថ្លៃ' : 'Free Pickup and Delivery Available'}</p>
                            <a href="#" class="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'SHOP NOW'}</a>
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

export default Hero;