export interface Category {
  name: 'apple' | 'samsung' | 'xiaomi' | 'vivo' | 'huawei'
}

export interface Product {
  id: number
  title: string
  price: number
  currencyId: 'CLP'
  currencyFormat: '$'
  category: Category
  isFreeShipping: boolean
  description: string
  sku: string
}
