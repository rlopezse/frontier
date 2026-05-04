import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart'

import s from './App.module.css'

function App() {
  return (
    <>
      <Cart />
      <div className={s.ft_container}>
        <section className={s.ft_sidebar}>
          <Filter />
        </section>
        <section className={s.ft_grid}>
          <ProductGrid />
        </section>
      </div>
    </>
  )
}

export default App
