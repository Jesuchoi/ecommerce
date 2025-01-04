import React, { useState } from 'react'
import Humberger from '../Components/ShopGrid/Humberger'
import Header from '../Components/Home/Header'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import Contacts from '../Components/Contact/Contacts'
import Map from '../Components/Contact/Map'
import ContactF from '../Components/Contact/ContactF'
import Footer from '../Components/Home/Footer'
import HomeCart from '../Components/Home/HomeCart'

const Contact = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Humberger/>
      <Header setShowCart={setShowCart} />
        {showCart && <HomeCart setShowCart={setShowCart} />}
      <Hero/>
      <Breadcrumb/>
      <Contacts/>
      <Map/>
      <ContactF/>
      <Footer/>
    </div>
  )
}

export default Contact