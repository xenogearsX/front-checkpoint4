import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './ProductsCards.css'

const ProductsCards = () => {
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
    <div className='cards'>
      {products.map(product => (
        <div className='card' key={product.idproduct}>
          <Link to={`/details/${product.idproduct}`}>
            <img src={product.smallurl} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.shortdescription}</p>
            <p>Prix: {product.price} €</p>
            <p>Stock: {product.stock}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsCards