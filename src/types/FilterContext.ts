export interface Filter {
  name: 'apple' | 'samsung' | 'xiaomi' | 'vivo' | 'huawei'
}

export interface FilterContextType {
  filter: Filter[]
  setFilter: (filter: Filter[]) => void
}

