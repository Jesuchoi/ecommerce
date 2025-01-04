import React from 'react'
import Blog1 from "../img/blog/blog-1.jpg";
import Blog2 from "../img/blog/blog-2.jpg";
import Blog3 from "../img/blog/blog-3.jpg";
import { useLocation } from 'react-router-dom';
const Blog = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    <div>
        {/* <!-- Blog Section Begin --> */}
    <section class="from-blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title from-blog__title">
                        <h2>{isKhmer ? 'បណ្ដុំនៃប្លុក' : 'From The Blog'}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img src={Blog1} alt=""/>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> March 5,2024</li>
                                <li><i class="fa fa-comment-o"></i> 12</li>
                            </ul>
                            <h5><a href="#">Bomber Jackets</a></h5>
                            <p>Bomber Jackets Long Sleeve with Pockets Outerwear  </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
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
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img src={Blog3} alt=""/>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2024</li>
                                <li><i class="fa fa-comment-o"></i> 64</li>
                            </ul>
                            <h5><a href="#">Apple AirPods Max - Starlight</a></h5>
                            <p>The ultimate listening experience. AirPods Max reimagine over-ear headphones.  </p>
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

export default Blog