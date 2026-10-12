import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop(){
  const [params,setParams]=useSearchParams();
  const category=params.get('category')||'All',sort=params.get('sort')||'featured',search=params.get('search')||'';const update=(key,val)=>{const p=new URLSearchParams(params);
    val?p.set(key,val):p.delete(key);
    setParams(p)};
    let list=products.filter(p=>(category==='All'||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase()));
    if(sort==='low')list.sort((a,b)=>a.price-b.price);
    if(sort==='high')list.sort((a,b)=>b.price-a.price);
    if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
    
  return (
    <main className="container page">
      <span className="eyebrow">DBLANKZ COLLECTION</span>
      <h1>Shop All Products</h1>
      <p className="muted">Find something you'll love.</p>
      <div className="filters">
        <input placeholder="Search products..." value={search} onChange={e=>update('search',e.target.value)}/>
        <select value={category} onChange={e=>update('category',e.target.value)}>{['All','Clothing','Shoes','Gadgets','Accessories'].map(c=><option key={c}>{c}</option>)}</select>
        <select value={sort} onChange={e=>update('sort',e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
      <p>{list.length} products found</p>
      <div className="products-grid">{list.map(p=><ProductCard key={p.id} product={p}/>)}</div>{!list.length&&<p>No matching products found.</p>}
    </main>
  );
}
