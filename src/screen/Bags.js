import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'

const Bags = () => {
  const [filter, setFilter] = useState('all')
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
    <div className='globalCard'>
      <Select props={bags} filter={setFilter} />
      <div className='cards'>
        {filter === 'all'
          ? bags.map(bag => (
              <div className='card' key={bag.idproduct}>
                <Link
                  to={{ pathname: `/details/${bag.idproduct}`, props: 'bags' }}
                >
                  <img src={bag.smallurl} alt={bag.name} />
                  <p>{bag.name}</p>
                  <p>{bag.shortdescription}</p>
                  <p>Prix: {bag.price} €</p>
                  <p>Stock: {bag.stock}</p>
                </Link>
              </div>
            ))
          : bags
              .filter(bag => bag.typename === filter)
              .map(bag => (
                <div className='card' key={bag.idproduct}>
                  <Link
                    to={{
                      pathname: `/details/${bag.idproduct}`,
                      props: 'bags'
                    }}
                  >
                    <img src={bag.smallurl} alt={bag.name} />
                    <p>{bag.name}</p>
                    <p>{bag.shortdescription}</p>
                    <p>Prix: {bag.price} €</p>
                    <p>Stock: {bag.stock}</p>
                  </Link>
                </div>
              ))}
      </div>
    </div>
  )
}

export default Bags
