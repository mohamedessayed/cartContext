import { useCart } from "../hooks/useCart";

function Navbar(){
    const {totalItems} = useCart();

    return <>
    
    <nav className="navbar navbar-dark bg-dark px-4">

        <span className="navbar-brand">My Store Name</span>

        <span className="badge bg-success">Cart: {totalItems}</span>

    </nav>
    
    </>
}


export default Navbar;