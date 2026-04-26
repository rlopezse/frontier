import { useContext } from 'react'
import { FilterContext } from './FilterContext'

export const useFilterContext = () => {
  const context = useContext(FilterContext)
  if (!context)
    throw new Error(
      'useFilterContext debe usarse dentro de FilterContextProvider',
    )
  return context
}
