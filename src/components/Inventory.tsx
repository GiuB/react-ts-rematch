import React, { ReactElement } from 'react'
import { IInventoryItem } from '../types'
import store from "../store";

const defaultInventory :IInventoryItem[] = [
  {id: 1, name: "🍎 Apple", price: 5},
  {id: 2, name: "🍌 Banana", price: 7},
  {id: 3, name: "🍓 Strawberry", price: 9},
]

export default function Inventory(): ReactElement {
  const items = defaultInventory

  const addItem = (item: IInventoryItem) => 
    store.dispatch({ type: "cart/add", payload: item })

  return (
    <div className="tb-cell inventory">
      <h2>Inventory</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} {item.price}€ <button onClick={() => addItem(item)}>Add to cart</button></li>
        ))}
      </ul>
    </div>
  )
}
