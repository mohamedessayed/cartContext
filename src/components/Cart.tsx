import { useCart } from "../hooks/useCart";

function Cart (){

    const {cart,removeFromCart,clearCart,totalPrice} = useCart()

    return <>
    
    <section className="container">

        <div className="card ">
        <div className="card-body">
            <h3>Shopping Cart</h3>

            {cart.length === 0 ? 
            (<><p className="text-center">Your cart is Empty!</p></>) : <>
            
            {cart.map((item)=> <>
            
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <strong>{item.name}</strong>
                </div>
                <p>
                    {item.price}
                </p>
                <p>
                    {item.quantity}
                </p>

            </div>

            <button onClick={()=>removeFromCart(item.id)}>Remove Product</button>
            
            </>)}

            <hr />
            <h5>Total: {totalPrice}</h5>

            <button onClick={clearCart}>
                Clear Cart
            </button>

            </> }

        </div>
    </div>

    </section>

    </>
}


export default Cart;
