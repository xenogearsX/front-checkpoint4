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
                    tempCart.push(
                      products.filter(
                        item => item.idproduct === product.idproduct
                      )[0]
                    )
                    cart.setCart(tempCart)
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
                    onClick={() =>
                      cart.setCart(
                        cart.cartItems.push(
                          products.filter(
                            item => item.idproduct === product.idproduct
                          )
                        )
                      )
                    }
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
