import type { Product } from '../../../types/ProductContext'
import formatPrice from '../../../utils/formatPrice'

import s from './ProductCard.module.css'


function ProductCard({ data }: { data: Product }) {
  return (
    <div className={s.product_card}>
      <img className={s.product_card_image} src={`/static/products/${data.sku}.png`} alt={data.title} loading='lazy' />
      <p className={s.product_card_title}>{data.title}</p>
      <p className={s.product_card_price}>{formatPrice(data.price)}</p>
      <p className={s.product_card_installments}><small>o 12 cuotas de {formatPrice(data.price / 12)} sin interés</small></p>
      <button className={s.product_card_button} >
        <span className={s.product_icon_cart}></span>
        Agregar al carrito</button>
    </div>
  )
}

export default ProductCard
