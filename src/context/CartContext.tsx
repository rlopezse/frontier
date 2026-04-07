import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface CartContextType {
  cart: string
  setCart: (cart: string) => void
};

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartContextProvider = ({ children } : {children: ReactNode}) => {
  const [cart, setCart] = useState('frontier');

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
};

