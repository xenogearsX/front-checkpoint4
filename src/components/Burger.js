import { useState } from 'react'
import './Burger.css'
import Nav from './Nav'

const Burger = () => {
  const [clicked, setCliked] = useState(false)
  const handleClick = () => setCliked(!clicked)
  return (
    <>
      {clicked ? <Nav /> : null}
      <div
        id='menu-burger'
        className={clicked ? 'clicked' : ''}
        onClick={() => handleClick()}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </>
  )
}

export default Burger
