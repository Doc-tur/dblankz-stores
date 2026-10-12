import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {ShoppingBag,Store} from 'lucide-react';
import {useCart} from '../context/CartContext';

export default function Navbar(){
  const {count,setCartOpen}=useCart();
  
  return (
    <header className="navbar">
      <Link className="brand" to="/"><Store size={26}/> DBlankz<span>Stores.</span></Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="cart-button" onClick={()=>setCartOpen(true)} aria-label="Open cart"><ShoppingBag size={21}/><span>{count}</span></button>
    </header>
  );
}
