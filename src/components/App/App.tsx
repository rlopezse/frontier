import { CartContextProvider } from "../../context/CartContext"
import ProductGrid from "../../components/ProductGrid/ProductGrid"
import Filter from "../../components/Filter"
import Cart from "../../components/Cart"

import styles from './App.module.css'

function App() {
  return (
    <main className={styles.ecommerce}>
      <Filter />
      <CartContextProvider>
        <Cart />
        <ProductGrid />
      </CartContextProvider>
    </main>
  )
}

export default App
