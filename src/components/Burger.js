import Nav from './Nav'

import './Burger.css'

const Burger = header => {
  return (
    <>
      {header.clicked ? <Nav handleClick={header.handleClick} /> : null}
      <div
        id='menuBurger'
        className={header.clicked ? 'clicked' : ''}
        onClick={() => header.handleClick()}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </>
  )
}

export default Burger
