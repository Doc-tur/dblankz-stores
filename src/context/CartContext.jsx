import React from 'react';
import {createContext,useContext,useEffect,useState} from 'react';

const CartContext=createContext(null);

export function CartProvider({children}){
 const [cart,setCart]=useState(()=>{try{return JSON.parse(localStorage.getItem('dblankz-cart'))||[]}catch{return []}});
 const [cartOpen,setCartOpen]=useState(false);
 const [checkoutOpen,setCheckoutOpen]=useState(false);
 useEffect(()=>localStorage.setItem('dblankz-cart',JSON.stringify(cart)),[cart]);
 const addItem=p=>{setCart(prev=>{const old=prev.find(i=>i.id===p.id);return old?prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i):[...prev,{...p,qty:1}]});setCartOpen(true)};
 const changeQty=(id,delta)=>setCart(prev=>prev.map(i=>i.id===id?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0));
 const removeItem=id=>setCart(prev=>prev.filter(i=>i.id!==id));
 const clearCart=()=>setCart([]);
 const count=cart.reduce((n,i)=>n+i.qty,0),subtotal=cart.reduce((n,i)=>n+i.price*i.qty,0);
 return <CartContext.Provider value={{cart,cartOpen,setCartOpen,checkoutOpen,setCheckoutOpen,addItem,changeQty,removeItem,clearCart,count,subtotal}}>{children}</CartContext.Provider>;
}
export const useCart=()=>useContext(CartContext);
