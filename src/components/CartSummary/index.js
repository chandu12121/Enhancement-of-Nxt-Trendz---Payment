// Write your code here
import Popup from 'reactjs-popup'

import Payment from '../Payment'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )

      return (
        <div>
          <h1>
            Order Total: <span>Rs {totalPrice}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <Popup
            trigger={
              <button className="button" type="button">
                Checkout
              </button>
            }
            position="right center"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
