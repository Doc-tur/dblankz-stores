import React from 'react';
import {denimJacket} from "../assets/index";
import {Link} from 'react-router-dom';
import {ArrowRight,Truck,ShieldCheck,Headphones} from 'lucide-react';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home(){
  return (
    <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">NEW SEASON • NEW STYLE</span>
        <h1>Discover your <em>next favorite.</em></h1>
        <p>Shop fresh fashion, everyday essentials, and the latest gadgets—all in one place.</p>
        <Link className="primary" to="/shop">Shop Collection <ArrowRight size={18}/></Link>
      </div>
      <img src={denimJacket} alt="Fashion collection"/>
    </section>
    <section className="container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">HANDPICKED FOR YOU</span>
          <h2>Featured Products</h2>
        </div>
        <Link to="/shop">View All <ArrowRight size={16}/></Link>
      </div>
      <div className="products-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
      <div className="benefits">
        <div>
          <Truck/>
          <b>Fast Delivery</b>
          <p>Convenient shipping across Nigeria</p>
        </div>
        <div>
          <ShieldCheck/>
          <b>Shop with Confidence</b>
          <p>Easy and secure shopping experience</p>
        </div>
        <div>
          <Headphones/>
          <b>Friendly Support</b>
          <p>We're here to help</p>
        </div>
      </div>
    </section>
    </>
  );
}
