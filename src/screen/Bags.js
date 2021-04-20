import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Bags = () => {
  const [bags, setBags] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/products/filter/bags')
      .then(res => setBags(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='cards'>
      {bags.map(bag => (
        <div className='card' key={bag.idproduct}>
          <Link to={{ pathname: `/details/${bag.idproduct}`, props: 'bags' }}>
            <img src={bag.smallurl} alt={bag.name} />
            <p>{bag.name}</p>
            <p>{bag.shortdescription}</p>
            <p>Prix: {bag.price} €</p>
            <p>Stock: {bag.stock}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Bags
