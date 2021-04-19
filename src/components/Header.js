import { Link } from 'react-router-dom'
import Burger from './Burger'

const Header = () => {
  return (
    <header id='header'>
      <Link to='/home' className='link' activeClassName='selected'>
        Bibelot.com
      </Link>
      <Burger />
    </header>
  )
}

export default Header
