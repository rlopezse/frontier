import s from './Filter.module.css'
import { useFilterContext } from '../../context/Filter/useFilterContext'

const category: string[] = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Otras']

const FilterTab = () => {
  const { setFilter } = useFilterContext()
  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Marca</h3>
      <div className={s.filter_buttons}>
        {category.map((category: string) => (
          <button
            className={s.filter_button}
            onClick={() => setFilter(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTab
