import { useEffect, useState } from 'react'

import axios from 'axios'

import ProductsCards from '../components/ProductsCards'

const Bags = () => {
  const [bags, setBags] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/products/filter/maroquinerie')
      .then(res => setBags(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return <ProductsCards products={bags} origin='bags' />
}

export default Bags
