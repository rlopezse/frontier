import { ProductCard } from "./components/ProductCard"
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.products}>
      <ProductCard />
    </div>
  )
}

export default App
