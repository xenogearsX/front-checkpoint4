import { Route, Switch } from 'react-router-dom'

import NavAccount from '../components/NavAccount'
import useProtected from '../hooks/useProtected'
import UserDetails from '../components/UserDetails'
import UserModif from '../components/UserModif'
import UserOrders from '../components/UserOrders'
import Welcome from '../components/Welcome'

const Account = () => {
  const [isLoading] = useProtected()

  return (
    <div className='account'>
      {isLoading ? <div>loading</div> : <NavAccount />}
      <Switch>
        <Route exact path='/account' component={Welcome} />
        <Route path='/account/details' component={UserDetails} />
        <Route path='/account/orders' component={UserOrders} />
        <Route path='/account/usermodif/:id' component={UserModif} />
      </Switch>
    </div>
  )
}

export default Account
