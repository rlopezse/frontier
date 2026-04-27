import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { useProductContext } from '../../context/Product/useProductContext'

import db from '../../services/firebase'

import type { Product } from '../../types/ProductContext'

import Loader from '../Loader/Loader'
import ProductCard from './ProductCard/ProductCard'

const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map((doc) => doc.data() as Product)
}

function ProductGrid() {
  const { filteredProducts, setFilteredProducts, setProduct } =
    useProductContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then((products) => {
      setProduct(products)
      setFilteredProducts(products)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </>
  )
}

export default ProductGrid
