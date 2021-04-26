import { useState } from 'react'
import Bags from './screen/Bags'
import Cart from './components/Cart'
import Clothes from './screen/Clothes'
import Details from './screen/Details'
import Header from './components/Header'
import Home from './screen/Home'
import Jewels from './screen/Jewels'
import NavAdmin from './components/NavAdmin'
import { Route, Switch } from 'react-router'

import './App.css'

const App = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <Home {...props} setCart={setCartItems} cartItems={cartItems} />
          )}
        />
        <Route path='/admin' component={NavAdmin} />
        <Route
          path='/bags'
          render={props => (
            <Bags {...props} setCart={setCartItems} cartItems={cartItems} />
          )}
        />
        <Route
          path='/cart'
          render={props => <Cart {...props} cartItems={cartItems} />}
        />
        <Route
          path='/clothes'
          render={props => (
            <Clothes {...props} setCart={setCartItems} cartItems={cartItems} />
          )}
        />
        <Route
          path='/details/:id'
          render={props => (
            <Details {...props} setCart={setCartItems} cartItems={cartItems} />
          )}
        />
        <Route
          path='/jewels'
          render={props => (
            <Jewels {...props} setCart={setCartItems} cartItems={cartItems} />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
