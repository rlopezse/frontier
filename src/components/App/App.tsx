import { CartContextProvider } from '../../context/CartContext'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart'

import styles from './App.module.css'

function App() {
  return (
    <main className={styles.ft_container}>
      <section className={styles.ft_sidebar}>
        <Filter />
      </section>
      <section className={styles.ft_grid}>
        <CartContextProvider>
          <Cart />
          <ProductGrid />
        </CartContextProvider>
      </section>
    </main>
  )
}

export default App
