import { useEffect, useState } from 'react'

import axios from 'axios'

import ProductsCards from '../components/ProductsCards'

const Clothes = () => {
  const [clothes, setClothes] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/products/filter/clothes')
      .then(res => setClothes(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return <ProductsCards products={clothes} origin='clothes' />
}

export default Clothes
