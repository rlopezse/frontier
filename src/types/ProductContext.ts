export interface Product {
  id: number
  title: string
  price: number
  currencyId: 'CLP'
  currencyFormat: '$'
  category: string
  isFreeShipping: boolean
  description: string
  sku: string
}

export interface ProductContextType {
  product: Product[]
  filteredProducts: Product[]
  setFilteredProducts: (filteredProducts: Product[]) => void
  setProduct: (product: Product[]) => void
}
