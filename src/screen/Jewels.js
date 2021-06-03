import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'
import UserContext from '../context/UserContext'

const Jewels = () => {
  const [filter, setFilter] = useState('all')
  const [jewels, setJewels] = useState([])
  const cart = useContext(UserContext)
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
                <button
                  onClick={() => {
                    const tempCart = cart[0]
                    if (
                      !tempCart.some(item => item.idproduct === jewel.idproduct)
                    ) {
                      tempCart.push({
                        ...jewels.filter(
                          item => item.idproduct === jewel.idproduct
                        )[0],
                        quantity: 1
                      })
                      cart[3](!cart[2])
                      cart[1](tempCart)
                    } else {
                      tempCart[
                        tempCart.findIndex(
                          item => item.idproduct === jewel.idproduct
                        )
                      ].quantity += 1
                      cart[3](!cart[2])
                      cart[1](tempCart)
                    }
                  }}
                >
                  +
                </button>
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
                  <button
                    onClick={() => {
                      const tempCart = cart[0]
                      if (
                        !tempCart.some(
                          item => item.idproduct === jewel.idproduct
                        )
                      ) {
                        tempCart.push({
                          ...jewels.filter(
                            item => item.idproduct === jewel.idproduct
                          )[0],
                          quantity: 1
                        })
                        cart[3](!cart[2])
                        cart[1](tempCart)
                      } else {
                        tempCart[
                          tempCart.findIndex(
                            item => item.idproduct === jewel.idproduct
                          )
                        ].quantity += 1
                        cart[3](!cart[2])
                        cart[1](tempCart)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              ))}
      </div>
    </div>
  )
}

export default Jewels
