import React from 'react'
import Humberger from '../Components/ShopGrid/Humberger'
import Header from '../Components/Home/Header'
import Hero from '../Components/ShopGrid/Hero'
import Breadcrumb from '../Components/ShopGrid/Breadcrumb'
import Contacts from '../Components/Contact/Contacts'
import Map from '../Components/Contact/Map'
import ContactF from '../Components/Contact/ContactF'
import Footer from '../Components/Home/Footer'

const Contact = () => {
  return (
    <div>
      <Humberger/>
      <Header/>
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