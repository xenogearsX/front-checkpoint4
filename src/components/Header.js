import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
      <NavLink to='/home' className='link' activeClassName='selected'>
        Bibelot.com
      </NavLink>
      <NavLink to='/bijoux' className='link' activeClassName='selected'>
        Bijoux
      </NavLink>
      <NavLink to='/sacs' className='link' activeClassName='selected'>
        Sacs
      </NavLink>
      <NavLink to='/vetements' className='link' activeClassName='selected'>
        Vêtements
      </NavLink>
    </header>
  )
}

export default Header
