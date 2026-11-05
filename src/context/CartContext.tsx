import { Children, createContext, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types/Product";


interface CartContextType {
    cart: CartItem[],
    addToCart: (product:Product) => void,
    removeFromCart:(id:number)=>void,
    clearCart:()=>void,
    totalItems: number,
    totalPrice:number,
}


export const CartContext = createContext<CartContextType | undefined>(undefined)

interface ProviderProps {
    children:ReactNode;
}

export function CartProvider({children}:ProviderProps) {


    const [cart,setCart] = useState<CartItem[]>([]);

    const addToCart = (product:Product)=>{
        setCart((currentCart) => {
            const existing = currentCart.find((item)=> item.id === product.id);

            if (existing) {
                return currentCart.map((item)=> item.id === product.id ? {...item, quantity:item.quantity + 1}: item)
            }

            return [...currentCart, {...product,quantity:1}]
        })
    }

    const removeFromCart = (id:number)=>{
        setCart((currentCart)=> currentCart.filter((item)=>item.id !== id))
    }

    const clearCart = ()=>{
        setCart([])
    }

    const totalItems = cart.reduce((total,item)=>total+item.quantity,0);


    const totalPrice = cart.reduce((total,item)=>total + (item.price * item.quantity),0)




    return <CartContext.Provider value={ {cart,addToCart,removeFromCart,clearCart,totalItems,totalPrice} }>
        {children}
    </CartContext.Provider>
}