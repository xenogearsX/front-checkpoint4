import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = header => {
  return (
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
      </ul>
    </nav>
  )
}

export default Nav
