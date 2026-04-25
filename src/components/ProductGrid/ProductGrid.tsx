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
  const { product, setProduct } = useProductContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then((products) => {
      console.log(products)
      setProduct(products)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {product.map((product) => (
        <ProductCard data={product} />
      ))}
    </>
  )
}

export default ProductGrid
