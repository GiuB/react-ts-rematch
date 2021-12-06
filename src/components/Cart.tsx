import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "../store"


const Cart: React.FC = () : ReactElement => {
  const cartItems = useSelector((state: RootState) => state.cart)

  return (
    <div className="tb-cell">
      <h2>Items in cart</h2>
      {cartItems.length === 0 && (
        <p>No items in cart</p>
      )}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            &nbsp;x <span>{item.quantity}</span>
            &nbsp;= <strong>{item.price * item.quantity}€</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart