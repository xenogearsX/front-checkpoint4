import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from './Select'

import './ProductsCards.css'
import UserContext from '../context/UserContext'

const ProductsCards = products => {
  const [filter, setFilter] = useState('')
  const cart = useContext(UserContext)

  return (
    <div className='globalCard'>
      <Select props={products.products} filter={setFilter} />
      <div className='cards'>
        {products.products
          .filter(product => product.typename.includes(filter))
          .map(product => (
            <div className='card' key={product.idproduct}>
              <Link
                to={{
                  pathname: `/details/${product.idproduct}`,
                  origin: products.origin
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
                    !tempCart.some(item => item.idproduct === product.idproduct)
                  ) {
                    tempCart.push({
                      ...products.products.filter(
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
