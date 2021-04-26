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
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/admin' component={NavAdmin} />
        <Route path='/bags' component={Bags} />
        <Route path='/cart' component={Cart} />
        <Route path='/clothes' component={Clothes} />
        <Route path='/details/:id' component={Details} />
        <Route exact path='/' component={Home} />
        <Route path='/jewels' component={Jewels} />
      </Switch>
    </div>
  )
}

export default App
