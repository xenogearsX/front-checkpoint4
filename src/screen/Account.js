import { useEffect, useState } from 'react'

import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom'

import { useProtected } from '../hooks/useProtected'
import Welcome from '../components/Welcome'

const Account = () => {
  const [isLoading] = useProtected()
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3030/types')
  //     .then(res => res.data)
  //     .then(data => setUser(data))
  //     .catch(e => {
  //       console.log(`Erreur lors de la reception : ${e.message}`)
  //     })
  // }, [])

  return (
    <div className='account'>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className='accountNav'>
          <ul>
            <li>
              <NavLink
                to='/account/details'
                className='link'
                activeClassName='selected'
              >
                Données personnelles
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/account/orders'
                className='link'
                activeClassName='selected'
              >
                Commandes
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <Switch>
        <Route exact path='/account' component={Welcome} />
        {/* <Route path='/account/details' component={UserDetails} />
        <Route path='/account/orders' component={UserOrders} /> */}
      </Switch>
    </div>
  )
}

export default Account
