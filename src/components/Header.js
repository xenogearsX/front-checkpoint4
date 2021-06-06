import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Burger from './Burger'
import UserContext from '../context/UserContext'

import './Header.css'

import cartImage from '../data/images/cart.png'

const Header = () => {
  const data = useContext(UserContext)
  const [clicked, setCliked] = useState(false)

  const account = useContext(UserContext)[6]
  const handleClick = () => setCliked(!clicked)
  const logOut = () => {
    account(null)
    localStorage.removeItem('token')
  }

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
            <Link
              to={{
                pathname: '/signin',
                origin: useHistory().location.pathname
              }}
            >
              Identification
            </Link>
            <Link to='/signup'>Enregistrement</Link>
          </div>
        ) : (
          <div className='logout' onClick={logOut}>
            Logout
          </div>
        )}
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
