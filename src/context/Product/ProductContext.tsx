import { createContext } from 'react'

import type { ProductContextType } from '../../types/ProductContext'

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
)
