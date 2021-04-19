import { Route, Switch } from 'react-router'
import Clothes from './screen/Clothes'
import Header from './components/Header'
import Home from './screen/Home'
import Jewels from './screen/Jewels'
import Bags from './screen/Bags'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/bijoux' component={Jewels}></Route>
        <Route path='/sacs' component={Bags}></Route>
        <Route path='/vetements' component={Clothes}></Route>
      </Switch>
    </div>
  )
}

export default App
