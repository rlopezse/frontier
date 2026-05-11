import { FilterContext } from './FilterContext'
import type { ReactNode } from 'react'
import { useState } from 'react'

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [filter, setFilter] = useState<string>('')
  const [order, setOrder] = useState<string>('')

  return (
    <FilterContext.Provider value={{ filter, order, setFilter, setOrder }}>
      {children}
    </FilterContext.Provider>
  )
}
