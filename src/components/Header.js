import { useState } from 'react'
import Burger from './Burger'
import { Link } from 'react-router-dom'

import './Header.css'

import cart from '../data/images/cart.png'

const Header = () => {
  const [clicked, setCliked] = useState(false)
  const handleClick = () => setCliked(!clicked)

  return (
    <header id='header'>
      <Link to='/' className='logo'>
        Bibelot.com
      </Link>
      <div className='icon'>
        <Link to='/cart'>
          <img src={cart} />
        </Link>
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
