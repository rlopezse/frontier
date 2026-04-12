import { useContext } from 'react'
import { ProductContext } from './ProductContext'

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context)
    throw new Error('useProdcutContext debe usarse dentro de ProductContext')
  return context
}
