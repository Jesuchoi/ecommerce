import React, { useState } from 'react'
import Humberger from '../Components/ShopGrid/Humberger'
import Header from '../Components/Home/Header'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import BlogSection from '../Components/Blog/BlogSection'
import Footer from '../Components/Home/Footer'
import HomeCart from '../Components/Home/HomeCart'

const Blog = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
    <Humberger />
    <Header setShowCart={setShowCart} />
        {showCart && <HomeCart setShowCart={setShowCart} />}
    <Hero/>
    <Breadcrumb/>
    <BlogSection/>
    <Footer/>
    </div>
  )
}

export default Blog