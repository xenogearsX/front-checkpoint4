import { useEffect, useState } from 'react'

import axios from 'axios'

import ProductsCards from '../components/ProductsCards'

const Jewels = () => {
  const [jewels, setJewels] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/products/filter/jewels')
      .then(res => setJewels(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return <ProductsCards products={jewels} origin='jewels' />
}

export default Jewels
