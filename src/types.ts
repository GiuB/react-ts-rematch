export interface IInventoryItem {
  id: number,
  name: string,
  price: number,
}

export interface ICartItem extends IInventoryItem {
  quantity: number,
}