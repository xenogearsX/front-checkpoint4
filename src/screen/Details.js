import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

import './Details.css'

import arrow from '../data/images/arrow.png'

const Details = id => {
  const [product, setProduct] = useState({})
  const cart = useContext(UserContext)
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
          const tempCart = cart[0]
          if (!tempCart.some(item => item.idproduct === product.idproduct)) {
            tempCart.push({
              ...product,
              quantity: 1
            })
            cart[3](!cart[2])
            cart[1](tempCart)
          } else {
            tempCart[
              tempCart.findIndex(item => item.idproduct === product.idproduct)
            ].quantity += 1
            cart[3](!cart[2])
            cart[1](tempCart)
          }
        }}
      >
        +
      </button>
    </div>
  )
}

export default Details
