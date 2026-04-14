import type { Product } from '../../../types/Product'

import s from './ProductCard.module.css'

function ProductCard({ data }: { data: Product }) {
  return (
    <div className={s.product_card}>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <button className={s.product_card_button}>
        <span className={s.product_icon_cart}></span>
      Agregar al carrito</button>
    </div>
  )
}

export default ProductCard
