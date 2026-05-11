export interface FilterContextType {
  filter: string
  order: string
  setOrder: (order: string) => void
  setFilter: (filter: string) => void
}
