import { ProductContext } from './ProductContext'
import type { Product } from '../../types/ProductContext'

import type { ReactNode } from 'react'
import { useState } from 'react'

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [product, setProduct] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  return (
    <ProductContext.Provider
      value={{ product, filteredProducts, setFilteredProducts, setProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}
