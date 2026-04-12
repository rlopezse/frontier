import type { Product } from './Product'

export interface ProductContextType {
  product: Product[]
  setProduct: (product: Product[]) => void
}
