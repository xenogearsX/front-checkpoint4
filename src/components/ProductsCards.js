import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from './Select'

import './ProductsCards.css'
import UserContext from '../context/UserContext'

const ProductsCards = () => {
  const [filter, setFilter] = useState('all')
  const [products, setProducts] = useState([])
  const cart = useContext(UserContext)
  useEffect(() => {
    axios
      .get('http://localhost:3030/products')
      .then(res => res.data)
      .then(data => setProducts(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return (
    <div className='globalCard'>
      <Select props={products} filter={setFilter} />
      <div className='cards'>
        {filter === 'all'
          ? products.map(product => (
              <div className='card' key={product.idproduct}>
                <Link
                  to={{ pathname: `/details/${product.idproduct}`, props: '' }}
                >
                  <img src={product.smallurl} alt={product.name} />
                  <p>{product.name}</p>
                  <p>{product.shortdescription}</p>
                  <p>Prix: {product.price} €</p>
                  <p>Stock: {product.stock}</p>
                </Link>
                <button
                  onClick={() => {
                    const tempCart = cart[0]
                    if (
                      !tempCart.some(
                        item => item.idproduct === product.idproduct
                      )
                    ) {
                      tempCart.push({
                        ...products.filter(
                          item => item.idproduct === product.idproduct
                        )[0],
                        quantity: 1
                      })
                      cart[3](!cart[2])
                      cart[1](tempCart)
                    } else {
                      tempCart[
                        tempCart.findIndex(
                          item => item.idproduct === product.idproduct
                        )
                      ].quantity += 1
                      cart[3](!cart[2])
                      cart[1](tempCart)
                    }
                  }}
                >
                  +
                </button>
              </div>
            ))
          : products
              .filter(product => product.typename === filter)
              .map(product => (
                <div className='card' key={product.idproduct}>
                  <Link
                    to={{
                      pathname: `/details/${product.idproduct}`,
                      props: ''
                    }}
                  >
                    <img src={product.smallurl} alt={product.name} />
                    <p>{product.name}</p>
                    <p>{product.shortdescription}</p>
                    <p>Prix: {product.price} €</p>
                    <p>Stock: {product.stock}</p>
                  </Link>
                  <button
                    onClick={() => {
                      const tempCart = cart[0]
                      if (
                        !tempCart.some(
                          item => item.idproduct === product.idproduct
                        )
                      ) {
                        tempCart.push({
                          ...products.filter(
                            item => item.idproduct === product.idproduct
                          )[0],
                          quantity: 1
                        })
                        cart[3](!cart[2])
                        cart[1](tempCart)
                      } else {
                        tempCart[
                          tempCart.findIndex(
                            item => item.idproduct === product.idproduct
                          )
                        ].quantity += 1
                        cart[3](!cart[2])
                        cart[1](tempCart)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              ))}
      </div>
    </div>
  )
}

export default ProductsCards
