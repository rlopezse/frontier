import { useCartContext } from '../../context/useCartContext'

const Cart = () => {
  const { cart } = useCartContext()

  return (
    <div className="cart">
      <h2>{ cart }</h2>
    </div>
  )
}

export default Cart

