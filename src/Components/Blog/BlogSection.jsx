import React from 'react'
import sizebar1 from '../img/blog/sidebar/sr-1.jpg'
import sizebar2 from '../img/blog/sidebar/sr-2.jpg'
import sizebar3 from '../img/blog/sidebar/sr-3.jpg'
import Blog1 from '../img/blog/blog-1.jpg'
import Blog2 from '../img/blog/blog-2.jpg'
import Blog3 from '../img/blog/blog-3.jpg'
import Blog4 from '../img/blog/blog-4.jpg'
import Blog5 from '../img/blog/blog-5.jpg'
import Blog6 from '../img/blog/blog-6.jpg'
import { useLocation } from 'react-router-dom';

const BlogSection = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
        {/* <!-- Blog Section Begin --> */}
    <section class="blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>{isKhmer ? 'ប្រភេទផលិតផល' : 'Category'}</h4>
                            <ul>
                                <li><a href="#">{isKhmer ? 'ទាំងអស់' : 'All'}</a></li>
                                <li><a href="#">{isKhmer ? 'សម្លៀកបំពាក់បុរស' : 'Men` clothing (20)'}</a></li>
                                <li><a href="#">{isKhmer ? 'សម្លៀកបំពាក់នារី' : 'Women`s clothing (5)'}</a></li>
                                <li><a href="#">{isKhmer ? 'គ្រឿងអលង្ការ' : 'Jewelery (9)'}</a></li>
                                <li><a href="#">{isKhmer ? 'គ្រឿងអេឡិចត្រូនិច' : 'Electronic (10)'}</a></li>
                            </ul>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>{isKhmer ? 'ថ្មីៗនេះ' : 'Recent News'}</h4>
                            <div class="blog__sidebar__recent">
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src={sizebar1} alt=""/>
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>International Travel<br /> Adapter/Power Converter with USB-C</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src={sizebar2} alt=""/>
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>Sets for Women Gold<br /> Layered Necklaces Chunky Bracelets Knuckle Rings Set Costume Accessories Jewelry</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src={sizebar3} alt=""/>
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>P.E Nation has recently created a unisex range  <br />for mens athleisure as there isnt as strong a range for men as there is for women</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>{isKhmer ? 'ស្វែងរកដោយ' :'Search By'}</h4>
                            <div class="blog__sidebar__item__tags">
                                <a href="#">{isKhmer ? 'បុរស..' : 'Men`s..'}</a>
                                <a href="#">{isKhmer ? 'នារី..' : 'Women`s..'}</a>
                                <a href="#">{isKhmer ? 'គ្រឿងអេឡិចត្រូនិច' : 'Electronic'}</a>
                                <a href="#">{isKhmer ? 'គ្រឿងអលង្ការ' : 'Jewelery'}</a>
                                <a href="#">{isKhmer ? 'ផ្សេងៗ' : 'Other..'}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog1} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2024</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Bomber Jackets</a></h5>
                                    <p>Bomber Jackets Long Sleeve with Pockets Outerweart</p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog2} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Chunky Gold Hoop Earrings</a></h5>
                                    <p>Gold Plated Stainless Steel Thick Hoop Earrings Dainty Cute Hypoallergenic Earrings Minimalist Jewelry </p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog3} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Apple AirPods Max - Starlight</a></h5>
                                    <p>The ultimate listening experience. AirPods Max reimagine over-ear headphones. </p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog4} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Zip Fly Solid Denim Shorts</a></h5>
                                    <p>Part of our latest Women Denim Shorts ready to shop online today! Free Shipping </p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog5} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Raglan Baseball T-Shirt </a></h5>
                                    <p>Basic Editions Boy's Colorblock</p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Blog6} alt=""/>
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                        <li><i class="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><a href="#">Uniform Skirts</a></h5>
                                    <p>The versatile skater skirt is necessary for making an amazing outfit. </p>
                                    <a href="#" class="blog__btn">{isKhmer ? 'អានបន្ថែម' : 'READ MORE'}<span class="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__pagination blog__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}
    </div>
  )
}

export default BlogSection