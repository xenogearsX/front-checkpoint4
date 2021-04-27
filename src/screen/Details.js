import { useEffect, useState } from 'react'
import axios from 'axios'

import './Details.css'

import arrow from '../data/images/arrow.png'
import { Link } from 'react-router-dom'

const Details = id => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:3030/products/${id.match.params.id}`)
      .then(res => res.data)
      .then(data => setProduct(data[0]))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='details'>
      <img src={product.bigurl} alt={product.name} className='image' />
      <div className='detailsTitle'>
        <Link to={`/${id.location.props}`}>
          <img src={arrow} alt='arrow' className='arrow' />
        </Link>
        <h1>{product.name}</h1>
        <p className='right'></p>
      </div>
      <p>{product.longdescription}</p>
      <p>Prix: {product.price} €</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={() => {
          const tempCart = id.cartItems
          if (!tempCart.some(item => item.idproduct === product.idproduct)) {
            tempCart.push({
              ...product,
              quantity: 1
            })
            id.setCart(tempCart)
          } else {
            tempCart[
              tempCart.findIndex(item => item.idproduct === product.idproduct)
            ].quantity += 1
            id.setCart(tempCart)
          }
        }}
      >
        +
      </button>
    </div>
  )
}

export default Details
