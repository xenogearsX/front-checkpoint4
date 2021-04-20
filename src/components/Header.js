import { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'

import './Header.css'

const Header = () => {
  const [clicked, setCliked] = useState(false)
  const handleClick = () => setCliked(!clicked)

  return (
    <header id='header'>
      <Link to='/home' className='logo'>
        Bibelot.com
      </Link>
      <Burger clicked={clicked} handleClick={handleClick} />
    </header>
  )
}

export default Header
