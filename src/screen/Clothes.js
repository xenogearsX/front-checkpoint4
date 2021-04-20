import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
  return (
    <div className='cards'>
      {clothes.map(clothe => (
        <div className='card' key={clothe.idproduct}>
          <Link to={`/details/${clothe.idproduct}`}>
            <img src={clothe.smallurl} alt={clothe.name} />
            <p>{clothe.name}</p>
            <p>{clothe.shortdescription}</p>
            <p>Prix: {clothe.price} €</p>
            <p>Stock: {clothe.stock}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Clothes
