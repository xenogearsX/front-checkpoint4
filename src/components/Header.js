import { Link } from 'react-router-dom'
import Burger from './Burger'

import './Header.css'

const Header = () => {
  return (
    <header id='header'>
      <Link to='/home' className='logo'>
        Bibelot.com
      </Link>
      <Burger />
    </header>
  )
}

export default Header
