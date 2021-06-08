import { useEffect, useState } from 'react'

import axios from 'axios'

import ProductsCards from '../components/ProductsCards'

const Home = () => {
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
    <div id='home'>
      <ProductsCards products={products} origin='' />
    </div>
  )
}

export default Home
