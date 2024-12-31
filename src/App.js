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
          <Route path="/" element={<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop-grid" element={<ShopGrid/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
