import type { Product } from './ProductContext'

export interface Cart {
  products: Product[]
  checkout: number
}

export interface CartContextType {
  isOpen: boolean
  cart: Cart
  setCart: (cart: Cart) => void
  setIsOpen: (isOpen: boolean) => void
}
