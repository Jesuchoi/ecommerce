import React from 'react';
import Home from './Pages/Home';
import ShopGrid from './Pages/ShopGrid';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import { CartProvider } from './Components/CartContext';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/en/home'/>}/>
          {/* English */}
          <Route path="/en/home" element={<Home/>}/>
          <Route path="/en/shop-grid" element={<ShopGrid/>}/>
          <Route path="/en/blog" element={<Blog/>}/>
          <Route path="/en/contact" element={<Contact/>}/>
          {/* Khmer */}
          <Route path="/kh/home" element={<Home />} />
          <Route path="/kh/shop-grid" element={<ShopGrid />} />
          <Route path="/kh/blog" element={<Blog />} />
          <Route path="/kh/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
