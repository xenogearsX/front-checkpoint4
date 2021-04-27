import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'

const Bags = cart => {
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
                <button
                  onClick={() => {
                    const tempCart = cart.cartItems
                    if (
                      !tempCart.some(item => item.idproduct === bag.idproduct)
                    ) {
                      tempCart.push({
                        ...bags.filter(
                          item => item.idproduct === bag.idproduct
                        )[0],
                        quantity: 1
                      })
                      cart.setCart(tempCart)
                    } else {
                      tempCart[
                        tempCart.findIndex(
                          item => item.idproduct === bag.idproduct
                        )
                      ].quantity += 1
                      cart.setCart(tempCart)
                    }
                  }}
                >
                  +
                </button>
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
                  <button
                    onClick={() => {
                      const tempCart = cart.cartItems
                      if (
                        !tempCart.some(item => item.idproduct === bag.idproduct)
                      ) {
                        tempCart.push({
                          ...bags.filter(
                            item => item.idproduct === bag.idproduct
                          )[0],
                          quantity: 1
                        })
                        cart.setCart(tempCart)
                      } else {
                        tempCart[
                          tempCart.findIndex(
                            item => item.idproduct === bag.idproduct
                          )
                        ].quantity += 1
                        cart.setCart(tempCart)
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

export default Bags
