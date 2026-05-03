import s from './Cart.module.scss'
import { useState } from 'react'
import { useCartContext } from '../../context/Cart/useCartContext'

const Cart = () => {
  const { cart } = useCartContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${s.cart} ${isOpen ? s.cart_isOpen : '' }`} onClick={() => setIsOpen(!isOpen)}>
      <button className={s.cart_button}>
        <span className={s.cart_icon}>🛒</span>
        <span className={s.cart_count}>{cart.length}</span>
      </button>
      <div className={s.cart_container}>  
        <div className={s.cart_title}>
          <p>{cart}</p>
        </div>
        <div className={s.cart_body}>
          Agrega algo al carrito para mostrarlo aquí
        </div>
        <div className={s.cart_body}>
          <div className={s.cart_items}>
            <p>Total: </p>
          </div>
          <button className={s.cart_checkout}>
            Ir a pagar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
