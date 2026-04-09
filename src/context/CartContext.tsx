import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import type { CartContextType } from '../types/CartContext'

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState('frontier')

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
