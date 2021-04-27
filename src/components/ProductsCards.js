import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from './Select'

import './ProductsCards.css'

const ProductsCards = cart => {
  const [filter, setFilter] = useState('all')
  const [products, setProducts] = useState([])
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
                    const tempCart = cart.cartItems
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
                      cart.setCart(tempCart)
                    } else {
                      tempCart[
                        tempCart.findIndex(
                          item => item.idproduct === product.idproduct
                        )
                      ].quantity += 1
                      cart.setCart(tempCart)
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
                      const tempCart = cart.cartItems
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
                        cart.setCart(tempCart)
                      } else {
                        tempCart[
                          tempCart.findIndex(
                            item => item.idproduct === product.idproduct
                          )
                        ].quantity += 1
                        cart.setCart(tempCart)
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
