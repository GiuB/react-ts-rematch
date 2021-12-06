import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "../store"


const CartResume: React.FC = () : ReactElement => {
  const cartItems = useSelector((state: RootState) => state.cart)
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (!total) return <></>;

  return (
    <div className="tb-cell">
      <h2>Cart Resume</h2>
      <ul>
        <strong>Total: {total}€</strong>
      </ul>
    </div>
  )
}

export default CartResume