import type { Size } from '../../types/Product'
import s from './filter.module.css'

const sizes: Size[] = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

const Filter = () => {
  return (
    <div className={s.filter}>
      <h3>Sizes:</h3>
      <div className="filter-sizes">
        {sizes.map((size) => (
          <button key={size} className="filter_size_button">
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
