import {X,Minus,Plus,Trash2} from 'lucide-react';
import {useCart} from '../context/CartContext';
import {money} from '../data/products';

export default function CartDrawer(){
  const {cart,cartOpen,setCartOpen,setCheckoutOpen,changeQty,removeItem,subtotal}=useCart();
  if(!cartOpen)return null;
  
  return (
    <div className="overlay" onMouseDown={()=>setCartOpen(false)}>
      <aside className="drawer" onMouseDown={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <h2>Your Cart ({cart.length})</h2>
          <button onClick={()=>setCartOpen(false)} aria-label="Close cart"><X/></button>
        </div>
        <div className="cart-items">
          {cart.length===0?<p>Your cart is empty. Start shopping!</p>:cart.map(i=>
          <div className="cart-item" key={i.id}>
            <img src={i.image} alt={i.name}/>
            <div>
              <h4>{i.name}</h4>
              <p>{money(i.price)}</p>
              <div className="qty">
                <button onClick={()=>changeQty(i.id,-1)} aria-label="Decrease quantity"><Minus size={14}/></button>
                {i.qty}
                <button onClick={()=>changeQty(i.id,1)} aria-label="Increase quantity"><Plus size={14}/></button>
                <button onClick={()=>removeItem(i.id)} aria-label="Remove item"><Trash2 size={15}/></button>
              </div>
            </div>
          </div>
          )}
        </div>
        <div className="drawer-footer">
          <div className="between">
            <b>Subtotal</b>
            <b>{money(subtotal)}</b>
          </div>
          <p>Shipping calculated at checkout.</p>
          <button className="primary full" disabled={!cart.length} onClick={()=>{setCartOpen(false);setCheckoutOpen(true)}}>Proceed to Checkout</button>
        </div>
      </aside>
    </div>
  );
}
