import { ProductContext } from './ProductContext'
import type { Product } from '../../types/Product'

import type { ReactNode } from 'react'
import { useState } from 'react'

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [product, setProduct] = useState<Product[]>([])

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
