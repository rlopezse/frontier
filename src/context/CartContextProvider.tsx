import { CartContext } from './CartContext'

import type { ReactNode } from 'react'
import { useState } from 'react'

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState('frontier')

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
