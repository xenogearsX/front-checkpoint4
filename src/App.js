import { Route, Switch } from 'react-router'
import Bijoux from './screen/Bijoux'
import Header from './components/Header'
import Home from './screen/Home'
import Sacs from './screen/Sacs'
import Vetements from './screen/Vetements'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/bijoux' component={Bijoux}></Route>
        <Route path='/sacs' component={Sacs}></Route>
        <Route path='/vetements' component={Vetements}></Route>
      </Switch>
    </div>
  )
}

export default App
