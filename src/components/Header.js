import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Burger from './Burger'
import Logo from './Logo'
import UserContext from '../context/UserContext'

import './Header.css'

import cartImage from '../data/images/cart.png'

const Header = () => {
  const data = useContext(UserContext)
  const [clicked, setCliked] = useState(false)

  const handleClick = () => setCliked(!clicked)
  const logOut = () => {
    data[6](null)
    data[8](null)
    localStorage.removeItem('token')
  }

  return (
    <header id='header'>
      <Logo />
      <div className='icon'>
        <Link to='/cart' className='cartImage'>
          <img src={cartImage} />
          {data[0].length > 0 ? (
            <p className='length'>
              {data[0].reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.quantity,
                0
              )}
            </p>
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
          <>
            <div className='sign'>
              <Link to='/account'>Votre compte</Link>
            </div>
            <div className='logout' onClick={logOut}>
              Logout
            </div>
          </>
        )}
        <Burger clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  )
}

export default Header
