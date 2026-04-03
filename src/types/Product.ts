export type Size = 'XS' | 'S' | 'M' | 'ML' | 'L' | 'XL' | 'XXL'

export interface Installment {
  quantity: number
  amount: number
}

export interface Product {
  id: number
  name: string
  price: number
  image: string
  size: Size
  discount: number
  installments?: Installment
  sizes: Size[]
}
