import { useCart } from "../hooks/useCart";
import type { Product } from "../types/Product";

const products : Product[] = [
    {id:1,name:"Laptop",price:25000},
    {id:2,name:"Headphones",price:1500},
    {id:3,name:"Keyboard",price:1200},
    {id:4,name:"Mouse",price:500},
]


function ProductList(){

    const {addToCart} = useCart();

return <>


<div className="container py-3">
    <h3>
        Products
    </h3>
    <div className="row g-3">
        {products.map((product)=> (<div className="col-md-6" key={product.id}>
            <div className="card">
                <div className="card-body">
                    <h5>{product.name}</h5>
                    <p>{product.price}</p>
                    <button onClick={()=>addToCart(product)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>))}
    </div>
</div>

</>    

}

export default ProductList;