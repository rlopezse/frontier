import type { Product } from '../../../types/Product'

function ProductCard({ data }: { data: Product }) {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.price}</p>
    </div>
  )
}

export default ProductCard
