import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'

import Account from './screen/Account'
import Bags from './screen/Bags'
import Cart from './components/Cart'
import Clothes from './screen/Clothes'
import Denied from './screen/Denied'
import Details from './screen/Details'
import Header from './components/Header'
import Home from './screen/Home'
import Jewels from './screen/Jewels'
import NavAdmin from './components/NavAdmin'
import SignIn from './screen/SignIn'
import SignUp from './screen/SignUp'
import UserContext from './context/UserContext'

import './App.css'

const App = () => {
  const [account, setAccount] = useState(null)
  const [admin, setAdmin] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [trigger, setTrigger] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      )
    )
  }, [trigger])

  return (
    <div className='App'>
      <UserContext.Provider
        value={[
          cartItems,
          setCartItems,
          trigger,
          setTrigger,
          total,
          account,
          setAccount,
          admin,
          setAdmin
        ]}
      >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/admin' component={NavAdmin} />
          <Route path='/bags' component={Bags} />
          <Route path='/cart' component={Cart} />
          <Route path='/clothes' component={Clothes} />
          <Route path='/denied' component={Denied} />
          <Route path='/details/:id' component={Details} />
          <Route path='/jewels' component={Jewels} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
