import React from 'react';
import { streetSneakers, wristWatch, whiteTShirt, smartPhonePro } from "../assets/index";
import {Link} from 'react-router-dom';

export default function Categories(){
  const categories=[
    ['Clothing', whiteTShirt],
    ['Shoes', streetSneakers],
    ['Gadgets', smartPhonePro],
    ['Accessories', wristWatch]
  ];
  
  return (
    <main className="container page">
      <span className="eyebrow">FIND YOUR STYLE</span>
      <h1>Shop by Category</h1>
      <div className="category-grid">{categories.map(([name,img])=><Link to={'/shop?category='+name} key={name}><img src={img} alt={name}/><h2>{name} →</h2></Link>)}</div>
    </main>
  );
}
