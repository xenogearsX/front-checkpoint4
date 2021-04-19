import { Route, Switch } from 'react-router'
import Bags from './screen/Bags'
import Clothes from './screen/Clothes'
import Header from './components/Header'
import Home from './screen/Home'
import Jewels from './screen/Jewels'
import NavAdmin from './components/NavAdmin'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/jewels' component={Jewels} />
        <Route path='/bags' component={Bags} />
        <Route path='/clothes' component={Clothes} />
        <Route path='/admin' component={NavAdmin} />
      </Switch>
    </div>
  )
}

export default App
