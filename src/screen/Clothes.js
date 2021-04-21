import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'

const Clothes = () => {
  const [clothes, setClothes] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    axios
      .get('http://localhost:3030/products/filter/clothes')
      .then(res => setClothes(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='globalCard'>
      <Select props={clothes} filter={setFilter} />
      <div className='cards'>
        {filter === 'all'
          ? clothes.map(clothe => (
              <div className='card' key={clothe.idproduct}>
                <Link
                  to={{
                    pathname: `/details/${clothe.idproduct}`,
                    props: 'clothes'
                  }}
                >
                  <img src={clothe.smallurl} alt={clothe.name} />
                  <p>{clothe.name}</p>
                  <p>{clothe.shortdescription}</p>
                  <p>Prix: {clothe.price} €</p>
                  <p>Stock: {clothe.stock}</p>
                </Link>
              </div>
            ))
          : clothes
              .filter(clothe => clothe.typename === filter)
              .map(clothe => (
                <div className='card' key={clothe.idproduct}>
                  <Link
                    to={{
                      pathname: `/details/${clothe.idproduct}`,
                      props: 'clothes'
                    }}
                  >
                    <img src={clothe.smallurl} alt={clothe.name} />
                    <p>{clothe.name}</p>
                    <p>{clothe.shortdescription}</p>
                    <p>Prix: {clothe.price} €</p>
                    <p>Stock: {clothe.stock}</p>
                  </Link>
                </div>
              ))}
      </div>
    </div>
  )
}

export default Clothes
