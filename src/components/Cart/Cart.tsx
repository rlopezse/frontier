import s from './Cart.module.scss'
import formatPrice from '../../utils/formatPrice'
import { useCartContext } from '../../context/Cart/useCartContext'
import { useProductContext } from '../../context/Product/useProductContext'

const Cart = () => {
  const { cart, isOpen, setCart, setIsOpen } = useCartContext()
  const { product } = useProductContext()

  if (product.length === 0) {
    return <></>
  }

  return (
    <div className={`${s.cart} ${isOpen ? s.cart_isOpen : ''}`}>
      <button className={s.cart_button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className={s.cart_icon}>
            <i className={s.cart_button_icon_close}></i>
          </span>
        ) : (
          <>
            <span className={s.cart_icon}>
              <i className={s.cart_button_icon}></i>
            </span>
            <span className={s.cart_button_length}>{cart.products.length}</span>
          </>
        )}
      </button>
      <div className={s.cart_container}>
        <div className={s.cart_title}>
          <p>Productos Seleccionados: {cart.products.length}</p>
        </div>
        <div className={s.cart_body}>
          {cart.products.length === 0 ? (
            <p style={{ textAlign: 'center' }}>
              Agrega algo al carrito para mostrarlo aquí ;)
            </p>
          ) : (
            cart.products.map((product, index) => (
              <div key={index} className={s.cart_items}>
                <p className={s.cart_items_title}>{product.title}</p>
                <p className={s.cart_items_price}>
                  {formatPrice(product.price)}
                </p>
              </div>
            ))
          )}
        </div>
        <div className={s.cart_bottom}>
          <div className={s.cart_bottom_total}>
            <p className={s.cart_bottom_label}>Total a pagar:</p>
            <p className={s.cart_bottom_amount}>{formatPrice(cart.checkout)}</p>
          </div>
          <button
            className={s.cart_bottom_checkout}
            onClick={() =>
              alert(
                cart.checkout === 0
                  ? 'Agrega productos al carrito'
                  : 'Total a pagar: ' + formatPrice(cart.checkout) + ' Pesos',
              )
            }
          >
            Ir a pagar
          </button>
          <button
            className={s.cart_bottom_clear}
            onClick={() => setCart({ products: [], checkout: 0 })}
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
