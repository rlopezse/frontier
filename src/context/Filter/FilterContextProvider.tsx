import { FilterContext } from './FilterContext'
import type { Filter } from '../../types/FilterContext'

import type { ReactNode } from 'react'
import { useState } from 'react'

export const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter[]>([])

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
