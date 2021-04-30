import { useEffect, useState } from 'react'
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
  const [trigger, setTrigger] = useState(1)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let totalTemp = 0
    cartItems.forEach(
      item => (totalTemp = totalTemp + item.price * item.quantity)
    )
    setTotal(totalTemp)
  }, [trigger])
  return (
    <div className='App'>
      <Header cart={cartItems} trigger={trigger} />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <Home
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
        <Route
          path='/admin'
          render={props => (
            <NavAdmin {...props} setTrigger={setTrigger} trigger={trigger} />
          )}
        />
        <Route
          path='/bags'
          render={props => (
            <Bags
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
        <Route
          path='/cart'
          render={props => (
            <Cart
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              total={total}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
        <Route
          path='/clothes'
          render={props => (
            <Clothes
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
        <Route
          path='/details/:id'
          render={props => (
            <Details
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
        <Route
          path='/jewels'
          render={props => (
            <Jewels
              {...props}
              setCart={setCartItems}
              cartItems={cartItems}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
