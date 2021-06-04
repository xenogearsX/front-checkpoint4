import { Route, Switch } from 'react-router'
import { useEffect, useState } from 'react'

import Bags from './screen/Bags'
import Cart from './components/Cart'
import Clothes from './screen/Clothes'
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
      <UserContext.Provider
        value={[
          cartItems,
          setCartItems,
          trigger,
          setTrigger,
          total,
          account,
          setAccount
        ]}
      >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={NavAdmin} />
          <Route path='/bags' component={Bags} />
          <Route path='/cart' component={Cart} />
          <Route path='/clothes' component={Clothes} />
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
