import { createModel } from "@rematch/core"
import { RootModel } from "./models"
import { IInventoryItem, ICartItem } from "../types"

type State = ReadonlyArray<ICartItem>

export const cart = createModel<RootModel>()({
  state: [] as State, // initial state
  reducers: { // handle state changes with pure functions
    add: (state :State, payload: IInventoryItem) :ICartItem[] => {
      const newState = [...state]
      const itemCartIndex = newState.findIndex((item: IInventoryItem) => item.id === payload.id)

      if (itemCartIndex === -1)
        newState.push({ ...payload, quantity: 1 })
      else
        newState[itemCartIndex].quantity += 1

      return newState;
    },
    remove: (state :State, payload: IInventoryItem) :ICartItem[] => {
      const newState = [...state]
      const itemCartIndex = newState.findIndex((item: IInventoryItem) => item.id === payload.id)

      if (itemCartIndex !== -1) {
        if (newState[itemCartIndex].quantity > 1)
          newState[itemCartIndex].quantity -= 1
        delete newState[itemCartIndex]
      }

      return newState
    }
  },
  /*
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {},
  }), */
});