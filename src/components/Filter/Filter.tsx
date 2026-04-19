import type { Category } from '../../types/Product'
import s from './Filter.module.css'

const category: Category[] = [
  { name: 'apple' },
  { name: 'samsung' },
  { name: 'xiaomi' },
  { name: 'vivo' },
  { name: 'huawei' }
]

const Filter = () => {
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

export default Filter
