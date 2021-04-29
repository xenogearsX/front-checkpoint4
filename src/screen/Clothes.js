import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from '../components/Select'

const Clothes = cart => {
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
                <button
                  onClick={() => {
                    const tempCart = cart.cartItems
                    if (
                      !tempCart.some(
                        item => item.idproduct === clothe.idproduct
                      )
                    ) {
                      tempCart.push({
                        ...clothes.filter(
                          item => item.idproduct === clothe.idproduct
                        )[0],
                        quantity: 1
                      })
                      cart.setTrigger(!cart.trigger)
                      cart.setCart(tempCart)
                    } else {
                      tempCart[
                        tempCart.findIndex(
                          item => item.idproduct === clothe.idproduct
                        )
                      ].quantity += 1
                      cart.setTrigger(!cart.trigger)
                      cart.setCart(tempCart)
                    }
                  }}
                >
                  +
                </button>
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
                  <button
                    onClick={() => {
                      const tempCart = cart.cartItems
                      if (
                        !tempCart.some(
                          item => item.idproduct === clothe.idproduct
                        )
                      ) {
                        tempCart.push({
                          ...clothes.filter(
                            item => item.idproduct === clothe.idproduct
                          )[0],
                          quantity: 1
                        })
                        cart.setTrigger(!cart.trigger)
                        cart.setCart(tempCart)
                      } else {
                        tempCart[
                          tempCart.findIndex(
                            item => item.idproduct === clothe.idproduct
                          )
                        ].quantity += 1
                        cart.setTrigger(!cart.trigger)
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

export default Clothes
