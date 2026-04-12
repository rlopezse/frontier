import { CartContextProvider } from '../../context/Cart/CartContextProvider'
import { ProductContextProvider } from '../../context/Product/ProductContextProvider'

import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart'

import s from './App.module.css'

function App() {
  return (
    <main className={s.ft_container}>
      <section className={s.ft_sidebar}>
        <Filter />
      </section>
      <section className={s.ft_grid}>
        <CartContextProvider>
          <Cart />
        </CartContextProvider>
        <ProductContextProvider>
          <ProductGrid />
        </ProductContextProvider>
      </section>
    </main>
  )
}

export default App
