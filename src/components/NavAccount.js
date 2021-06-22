import { NavLink } from 'react-router-dom'

import './NavAccount.css'

const NavAccount = () => {
  return (
    <div className='navAccount'>
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
  )
}

export default NavAccount
