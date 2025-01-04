import React, {useState} from 'react'
import Preloader from '../Components/Home/Preloader'
import Menu from '../Components/Home/Menu'
import Header from '../Components/Home/Header'
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature'
import Banner from '../Components/Home/Banner'
import Blog from '../Components/Home/Blog'
import Footer from '../Components/Home/Footer'
import HomeCart from '../Components/Home/HomeCart'

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
        {/* <Preloader/> */}
        <Header setShowCart={setShowCart} />
        {showCart && <HomeCart setShowCart={setShowCart} />}
        <Hero/>
        <Feature/>
        <Banner/>
        <Blog />
        <Footer />
    </div>
  )
}
export default Home