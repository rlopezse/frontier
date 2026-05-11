import s from './Filter.module.css'
import { useFilterContext } from '../../context/Filter/useFilterContext'
import { useProductContext } from '../../context/Product/useProductContext'

const category: string[] = ['apple', 'samsung', 'xiaomi', 'huawei']
const ordenarPor: string[] = ['menor precio', 'mayor precio']

// agregar un boton para mostrar todos los productos
const FilterTab = () => {
  const { setFilter, order, setOrder } = useFilterContext()
  const { product, filteredProducts, setFilteredProducts } = useProductContext()

  if (product.length === 0) {
    return <></>
  }

  const handleProducts = (filter: string) => {
    if (filter === '') {
      return setFilteredProducts(product)
    }

    const filterProducts = product.filter(
      (product) => product.category === filter,
    )

    setFilteredProducts(filterProducts)
    setFilter(filter)
  }

  const handleOrder = (order: string) => {
    setFilteredProducts(
      [...filteredProducts].sort((a, b) => {
        if (order === 'menor precio') {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      }),
    )
    setOrder(order)
  }

  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Ordenar por: {order}</h3>
      <div className={s.filter_buttons}>
        {ordenarPor.map((order: string) => (
          <button
            className={s.filter_button}
            onClick={() => handleOrder(order)}
            key={order}
          >
            {order}
          </button>
        ))}
      </div>
      <h3 className={s.filter_title}>Marcas:</h3>
      <div className={s.filter_buttons}>
        {category.map((category: string) => (
          <button
            className={s.filter_button}
            onClick={() => handleProducts(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      Mostrando {filteredProducts.length} resultados
    </div>
  )
}

export default FilterTab
