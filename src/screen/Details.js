import axios from 'axios'
import { useEffect, useState } from 'react'

const Details = id => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:3030/products/${id.match.params.id}`)
      .then(res => res.data)
      .then(data => setProduct(data[0]))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='details'>
      <img src={product.bigurl} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.longdescription}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
      <p>{}</p>
      <p>{}</p>
    </div>
  )
}

export default Details
