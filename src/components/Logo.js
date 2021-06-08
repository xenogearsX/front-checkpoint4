import { Link } from 'react-router-dom'

import { useCheckToken } from '../hooks/useCheckToken'

const Logo = () => {
  localStorage.getItem('token') ? useCheckToken() : null
  return (
    <Link to='/' className='logo'>
      Bibelot.com
    </Link>
  )
}

export default Logo
