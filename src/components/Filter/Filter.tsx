import s from './Filter.module.css'
import Loader from '../Loader/Loader'
import { useFilterContext } from '../../context/Filter/useFilterContext'
import { useProductContext } from '../../context/Product/useProductContext'

const category: string[] = ['apple', 'samsung', 'xiaomi', 'huawei']

const FilterTab = () => {
  const { setFilter } = useFilterContext()
  const { product, filteredProducts, setFilteredProducts } = useProductContext()

  if (product.length === 0) {
    return <Loader />
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

  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Marca</h3>
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
