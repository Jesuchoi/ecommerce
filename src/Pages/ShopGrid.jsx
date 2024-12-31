import React from 'react'
import Header from '../Components/Home/Header'
import Humberger from '../Components/ShopGrid/Humberger'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import Product from '../Components/ShopGrid/Product'
import Footer from '../Components/Home/Footer'

const ShopGrid = () => {
  return (
    <div>
    <Humberger />
    <Header />
    <Hero />
    <Breadcrumb />
    <Product />
    <Footer />
  </div>
  )
}

export default ShopGrid