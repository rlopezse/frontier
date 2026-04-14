import type { Size } from '../../types/Product'
import s from './Filter.module.css'

const sizes: Size[] = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

const Filter = () => {
  return (
    <div className={s.filter}>
      <h3 className={s.filter_title}>Talla</h3>
      <div className={s.filter_buttons}>
        {sizes.map((size) => (
          <button key={size} className={s.filter_button}>
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
