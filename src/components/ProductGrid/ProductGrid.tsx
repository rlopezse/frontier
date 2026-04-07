import { useEffect , useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'

import db from '../../services/firebase'

import type { Product } from '../../types/Product'

import ProductCard from "./ProductCard/ProductCard"

const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map(doc => doc.data() as Product)
}


function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Cargando productos...</div>
  }

  return (
    <div className="product-grid">
      <div>
        {products.map(product => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
