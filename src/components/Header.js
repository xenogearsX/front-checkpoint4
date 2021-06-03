import { useContext, useState } from 'react'
import Burger from './Burger'
import { Link } from 'react-router-dom'

import './Header.css'

import cartImage from '../data/images/cart.png'
import UserContext from '../context/UserContext'

const Header = () => {
  const data = useContext(UserContext)
  const [clicked, setCliked] = useState(false)
  const handleClick = () => setCliked(!clicked)

  return (
    <header id='header'>
      <Link to='/' className='logo'>
        Bibelot.com
      </Link>
      <div className='icon'>
        <Link to='/cart'>
          <img src={cartImage} />
          {data[0].length > 0 ? (
            <p className='length'>{data[0].length}</p>
          ) : null}
        </Link>
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
