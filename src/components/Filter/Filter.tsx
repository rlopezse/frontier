import type { Filter } from '../../types/FilterContext'
import s from './Filter.module.css'

const category: Filter[] = [
  { name: 'apple' },
  { name: 'samsung' },
  { name: 'xiaomi' },
  { name: 'vivo' },
  { name: 'huawei' }
]

const FilterTab = () => {
  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Marca</h3>
      <div className={s.filter_buttons}>
        {category.map((category) => (
          <button className={s.filter_button}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTab
