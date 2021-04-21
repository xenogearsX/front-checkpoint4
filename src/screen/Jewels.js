import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'

const Jewels = () => {
  const [filter, setFilter] = useState('all')
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
    <div className='globalCard'>
      <Select props={jewels} filter={setFilter} />
      <div className='cards'>
        {filter === 'all'
          ? jewels.map(jewel => (
              <div className='card' key={jewel.idproduct}>
                <Link
                  to={{
                    pathname: `/details/${jewel.idproduct}`,
                    props: 'jewels'
                  }}
                >
                  <img src={jewel.smallurl} alt={jewel.name} />
                  <p>{jewel.name}</p>
                  <p>{jewel.shortdescription}</p>
                  <p>Prix: {jewel.price} €</p>
                  <p>Stock: {jewel.stock}</p>
                </Link>
              </div>
            ))
          : jewels
              .filter(jewel => jewel.typename === filter)
              .map(jewel => (
                <div className='card' key={jewel.idproduct}>
                  <Link
                    to={{
                      pathname: `/details/${jewel.idproduct}`,
                      props: 'jewels'
                    }}
                  >
                    <img src={jewel.smallurl} alt={jewel.name} />
                    <p>{jewel.name}</p>
                    <p>{jewel.shortdescription}</p>
                    <p>Prix: {jewel.price} €</p>
                    <p>Stock: {jewel.stock}</p>
                  </Link>
                </div>
              ))}
      </div>
    </div>
  )
}

export default Jewels
