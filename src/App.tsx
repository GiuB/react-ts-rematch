import React from 'react'
import { Provider } from 'react-redux'
import './App.css'

import store from './store'
import Cart from './components/Cart'
import CartResume from './components/CartResume'
import Inventory from './components/Inventory'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="tb">
        <div className="tb-row">
          <Inventory />
          <Cart />
          <CartResume />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
