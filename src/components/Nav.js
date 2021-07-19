import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../context/UserContext'

import './Nav.css'

const Nav = header => {
  const admin = useContext(UserContext)[7]
  return (
    <div id='nav'>
      <div id='navAside' onClick={() => header.handleClick()}></div>
      <nav id='menu'>
        <ul className='nav'>
          <li>
            <NavLink
              to='/jewels'
              className='link'
              activeClassName='selected'
              onClick={() => header.handleClick()}
            >
              Bijoux
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/bags'
              className='link'
              activeClassName='selected'
              onClick={() => header.handleClick()}
            >
              Maroquinerie
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clothes'
              className='link'
              activeClassName='selected'
              onClick={() => header.handleClick()}
            >
              Prêt-à-porter
            </NavLink>
          </li>
          {admin ? (
            <li>
              <NavLink
                to='/admin'
                className='link'
                activeClassName='selected'
                onClick={() => header.handleClick()}
              >
                Administration
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
