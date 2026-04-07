import type { Product } from '../../../types/Product'
import { useCartContext } from '../../../context/useCartContext'

function ProductCard ({data}: {data: Product}) {
  const { setCart } = useCartContext()

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <button onClick={() => setCart('hola')}>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard
