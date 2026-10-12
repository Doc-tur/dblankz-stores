import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact'; 

export default function App(){
  return (
    <BrowserRouter>
    <CartProvider> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<main className="container page"><h1>Page not found</h1></main>}/>
      </Routes>
      <footer>© {new Date().getFullYear()} DBlankz Stores · Created by Mukhtar Emiabata Olakunbi</footer>
      <CartDrawer/>
      <CheckoutModal/>
    </CartProvider>
    </BrowserRouter>
  );
}
