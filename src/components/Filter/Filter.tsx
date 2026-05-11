import s from './Filter.module.css'
import { useFilterContext } from '../../context/Filter/useFilterContext'
import { useProductContext } from '../../context/Product/useProductContext'

const category: string[] = ['apple', 'samsung', 'xiaomi', 'huawei']
const ordenarPor: string[] = ['menor precio', 'mayor precio']

// agregar un boton para mostrar todos los productos
// agregar un dropdown para ordenar por precio

const FilterTab = () => {
  const { setFilter } = useFilterContext()
  const { product, filteredProducts, setFilteredProducts } = useProductContext()

  if (product.length === 0) {
    return <></>
  }

  const handleProducts = (filter: string) => {
    //aca se filtra
    if (filter === '') {
      return setFilteredProducts(product)
    }

    const filterProducts = product.filter(
      (product) => product.category === filter,
    )

    setFilteredProducts(filterProducts)
    setFilter(filter)
  }

  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Ordenar por:</h3>
      <div className={s.filter_buttons}>
        {ordenarPor.map((category: string) => (
          <button
            className={s.filter_button}
            onClick={() => handleProducts(category)}
            key={category}
          >
            {category}
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
