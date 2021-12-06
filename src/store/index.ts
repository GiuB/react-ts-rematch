import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import { models } from './models'

const store = init({
  name: "Cart Demo Store",
  models,
});

export default store

export type RootState = RematchRootState<typeof models>
export type RootDispatch = RematchDispatch<typeof models>