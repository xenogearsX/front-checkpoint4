import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav id='menu'>
      <ul className='nav'>
        <li>
          <NavLink to='/bijoux' className='link' activeClassName='selected'>
            Bijoux
          </NavLink>
        </li>
        <li>
          <NavLink to='/sacs' className='link' activeClassName='selected'>
            Maroquinerie
          </NavLink>
        </li>
        <li>
          <NavLink to='/vetements' className='link' activeClassName='selected'>
            Prêt-à-porter
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
