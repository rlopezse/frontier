import { useContext } from 'react'
import { FilterContext } from './FilterContext'

export const useCartContext = () => {
  const context = useContext(FilterContext)
  if (!context)
    throw new Error('useFilterContext debe usarse dentro de FilterContextProvider')
  return context
}
