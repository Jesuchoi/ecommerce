import React from 'react'
import Humberger from '../Components/ShopGrid/Humberger'
import Header from '../Components/Home/Header'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import BlogSection from '../Components/Blog/BlogSection'
import Footer from '../Components/Home/Footer'

const Blog = () => {
  return (
    <div>
    <Humberger />
    <Header/>
    <Hero/>
    <Breadcrumb/>
    <BlogSection/>
    <Footer/>
    </div>
  )
}

export default Blog