import { useEffect , useState} from 'react'
//import { ProductCard } from "./components/ProductCard"
import styles from './App.module.css'
import { db } from './services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import type { Product } from './types/Product'

const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map(doc => doc.data() as Product)
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className={styles.loading}>Cargando productos...</div>
  }

  return (
    <div className={styles.products}>
      {products.map(product => (
        product.title
      ))}
    </div>
  )
}

export default App
