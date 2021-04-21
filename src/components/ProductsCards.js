import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from './Select'

import './ProductsCards.css'

const ProductsCards = () => {
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
                </div>
              ))}
      </div>
    </div>
  )
}

export default ProductsCards
