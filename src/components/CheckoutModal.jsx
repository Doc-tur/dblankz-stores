import {useState} from 'react';
import {X,CheckCircle2} from 'lucide-react';
import {useCart} from '../context/CartContext';
import {money} from '../data/products';

export default function CheckoutModal(){
  const {
    checkoutOpen,setCheckoutOpen,subtotal,clearCart,cart}=useCart();
    const [step,setStep]=useState(1),[promo,setPromo]=useState(''),[discount,setDiscount]=useState(0),[promoMessage,setPromoMessage]=useState(''),[details,setDetails]=useState({name:'',email:'',phone:'',address:'',city:''}),[payment,setPayment]=useState('card'),[orderId,setOrderId]=useState('');if(!checkoutOpen)return null;const shipping=subtotal>=50000?0:2500,total=Math.max(0,subtotal-discount)+shipping;
    function close(){
      setCheckoutOpen(false);
      setStep(1);
      setPromo('');
      setDiscount(0);
      setPromoMessage('');
      setDetails({name:'',email:'',phone:'',address:'',city:''})
  }
  function applyPromo(){
    if(promo.trim().toUpperCase()==='DBLANKZ10'){setDiscount(Math.round(subtotal*.1));
      setPromoMessage('10% discount applied!')
    }else{
      setDiscount(0);
      setPromoMessage('Invalid code. Try DBLANKZ10')
    }
  }
  function submitOrder(){
    setOrderId('DB-'+Date.now().toString().slice(-8));
    clearCart();
    setStep(4)
  }
  
  return (
    <div className="overlay modal-overlay" onMouseDown={close}>
      <section className="checkout-modal" onMouseDown={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <h2>Checkout</h2>
          <button onClick={close} aria-label="Close checkout"><X/></button>
        </div>
        {step===4?
        <div className="success">
          <CheckCircle2 size={66} color="#17805d"/>
          <h2>Order Confirmed!</h2>
          <p>Thank you for shopping at DBlankz Stores.</p>
          <p>Order number: <b>{orderId}</b></p>
          <p>This is a demo order. No payment was collected.</p>
          <button className="primary" onClick={close}>Continue Shopping</button>
        </div>:<>
        <div className="steps">
          <span className={step===1?'active':''}>1. Delivery</span>
          <span className={step===2?'active':''}>2. Payment</span>
          <span className={step===3?'active':''}>3. Review</span>
        </div>
        {step===1?
        <form id="delivery" onSubmit={e=>{e.preventDefault();setStep(2)}}>
          <h3>Delivery Details</h3>
          {[['name','Full name'],['email','Email address'],['phone','Phone number'],['address','Delivery address'],['city','City']].map(([key,label])=><label key={key}>{label}<input required type={key==='email'?'email':key==='phone'?'tel':'text'} value={details[key]} onChange={e=>setDetails({...details,[key]:e.target.value})} placeholder={label}/></label>)}
          <button className="primary full" type="submit">Continue to Payment</button>
        </form>:step===2?
        <div>
          <h3>Payment Method</h3>
          <label className="option"><input type="radio" checked={payment==='card'} onChange={()=>setPayment('card')}/> Card (demo)</label>
          <label className="option"><input type="radio" checked={payment==='transfer'} onChange={()=>setPayment('transfer')}/> Bank Transfer (demo)</label>
          <p className="muted">No real payments are processed.</p>
          <div className="between">
            <button onClick={()=>setStep(1)}>Back</button>
            <button className="primary" onClick={()=>setStep(3)}>Review Order</button>
          </div>
        </div>:
        <div>
          <h3>Review Your Order</h3>
          {cart.map(i=><div className="between review-line" key={i.id}><span>{i.name} × {i.qty}</span><b>{money(i.price*i.qty)}</b></div>)}
          <label>Promo code<div className="promo"><input value={promo} onChange={e=>setPromo(e.target.value)} placeholder="DBLANKZ10"/>
          <button onClick={applyPromo}>Apply</button>
        </div>
        </label>
        <p className="muted">{promoMessage}</p>
        <div className="between">
          <span>Subtotal</span>
          <b>{money(subtotal)}</b>
        </div>
        <div className="between">
          <span>Discount</span>
          <b>-{money(discount)}</b>
        </div>
        <div className="between">
          <span>Shipping</span>
          <b>{money(shipping)}</b>
        </div>
        <hr/>
        <div className="between">
          <b>Total</b>
          <b>{money(total)}</b>
        </div>
        <div className="between">
          <button onClick={()=>setStep(2)}>Back</button>
          <button className="primary" onClick={submitOrder}>Place Demo Order</button>
        </div>
      </div>}
      </>}
      </section>
    </div>
  );
}
