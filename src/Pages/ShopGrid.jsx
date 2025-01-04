import React, {useState} from 'react'
import Header from '../Components/Home/Header'
import Humberger from '../Components/ShopGrid/Humberger'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import Product from '../Components/ShopGrid/Product'
import Footer from '../Components/Home/Footer'
import HomeCart from '../Components/Home/HomeCart'

const ShopGrid = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
    <Humberger />
    <Header setShowCart={setShowCart} />
    {showCart && <HomeCart setShowCart={setShowCart} />}
    <Hero />
    <Breadcrumb />
    <Product />
    <Footer />
  </div>
  )
}

export default ShopGrid