import {useParams,Link} from 'react-router-dom';
import {products,money} from '../data/products';
import {useCart} from '../context/CartContext';

export default function ProductDetails(){
  const {id}=useParams();const product=products.find(p=>p.id===Number(id));const {addItem}=useCart();
  if(!product)return <main className="container page"><h1>Product not found</h1><Link to="/shop">Back to shop</Link></main>;
  return <main className="container page detail">
    <img src={product.image} alt={product.name} onError={e=>{e.currentTarget.src='/image-placeholder.svg'}} />
    <div><Link to="/shop">← Back to shop</Link><p className="eyebrow">{product.category} / {product.sku}</p>
    <h1>{product.name}</h1><h2>{money(product.price)}</h2><p>{product.description}</p>
    <p><strong>Availability:</strong> {product.stock} in stock</p>
    <p><strong>Colours:</strong> {product.colors.join(', ')}</p>
    <p><strong>Sizes / Options:</strong> {product.sizes.join(', ')}</p>
    <p><strong>Material / Type:</strong> {product.material}</p>
    <button className="primary" disabled={!product.stock} onClick={()=>addItem(product)}>Add to Cart</button>
    <p className="muted"><small>Demo listing. Prices, specifications and stock are illustrative.</small></p>
    </div></main>
}
