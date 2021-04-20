import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  return (
    <div className='cards'>
      {jewels.map(jewel => (
        <div className='card' key={jewel.idproduct}>
          <Link to={`/details/${jewel.idproduct}`}>
            <img src={jewel.smallurl} alt={jewel.name} />
            <p>{jewel.name}</p>
            <p>{jewel.shortdescription}</p>
            <p>Prix: {jewel.price} €</p>
            <p>Stock: {jewel.stock}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Jewels
