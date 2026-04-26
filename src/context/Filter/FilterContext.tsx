import { createContext } from 'react'

import type { FilterContextType } from '../../types/FilterContext'

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
)
