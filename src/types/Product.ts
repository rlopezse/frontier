export type Size = 'XS' | 'S' | 'M' | 'ML' | 'L' | 'XL' | 'XXL'

export interface Product {
  id: number
  title: string
  price: number
  currencyId: string
  currencyFormat: string
  availableSizes: string[]
  installments: number
  isFreeShipping: boolean
  style: string
  description: string
  sku: number
}
