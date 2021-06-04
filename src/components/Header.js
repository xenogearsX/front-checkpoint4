import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import UserContext from '../context/UserContext'

import './Header.css'

import cartImage from '../data/images/cart.png'

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
        {data[5] === null ? (
          <div className='sign'>
            <Link to='/signin'>Identification</Link>
            <Link to='/signup'>Enregistration</Link>
          </div>
        ) : null}
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
