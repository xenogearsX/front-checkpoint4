import { useEffect, useState } from 'react'
import Burger from './Burger'
import { Link } from 'react-router-dom'

import './Header.css'

import cartImage from '../data/images/cart.png'

const Header = cart => {
  const [data, setData] = useState(cart.cart)
  const [clicked, setCliked] = useState(false)
  const handleClick = () => setCliked(!clicked)
  useEffect(() => {
    setData(cart.cart)
  }, [cart.cart])
  return (
    <header id='header'>
      <Link to='/' className='logo'>
        Bibelot.com
      </Link>
      <div className='icon'>
        <Link to='/cart'>
          <img src={cartImage} />
          {data.length > 0 ? <p className='length'>{data.length}</p> : null}
        </Link>
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
