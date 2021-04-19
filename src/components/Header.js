import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
      <NavLink to='/home'>Accueil</NavLink>
    </header>
  )
}

export default Header
