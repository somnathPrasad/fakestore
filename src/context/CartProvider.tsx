import { product } from "@/components/ProductCard";
import { createContext, ReactNode, useState } from "react";

type cart = {
    cartItems: product[]|[];
    setCartItems: React.Dispatch<React.SetStateAction<product[]|[]>>
}

export const CartContext = createContext<cart>({cartItems:[],setCartItems:()=>{}})

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<product[]|[]>([])
    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;