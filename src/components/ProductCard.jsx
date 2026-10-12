import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingBag} from 'lucide-react';
import {money} from '../data/products';
import {useCart} from '../context/CartContext';

export default function ProductCard({product}){
  const {addItem}=useCart();
 
  return (
    <article className="product-card">
      <Link to={'/product/'+product.id}><img src={product.image} alt={product.name} loading="lazy" onError={e=>{e.currentTarget.src='/image-placeholder.svg'}} /></Link>
      <div className="product-info">
        <small>{product.category} · {product.stock} in stock</small>
        <Link to={'/product/'+product.id}><h3>{product.name}</h3></Link>
        <div className="product-bottom">
          <strong>{money(product.price)}</strong>
          <button onClick={()=>addItem(product)} aria-label={'Add '+product.name+' to cart'}><ShoppingBag size={19}/></button>
        </div>
      </div>
    </article>
  );
}
