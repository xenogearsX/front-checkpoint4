import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import useProtected from '../hooks/useProtected'

import modifier from '../data/images/Modifier.png'

const SeeProducts = () => {
  useProtected()

  const [product, setProduct] = useState([])
  const [message, setMessage] = useState('')
  const [trigger, setTrigger] = useState(1)
  useEffect(() => {
    axios
      .get('http://localhost:3030/products')
      .then(res => setProduct(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [trigger])
  return (
    <div className='table'>
      <h1>Produits dans la BDD</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom produit</th>
            <th>Description courte</th>
            <th>Description détaillée</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Url petite image</th>
            <th>Url image grand format</th>
            <th>Id type produit</th>
            <th>Modifier</th>
            <th>Suppr.</th>
          </tr>
        </thead>
        <tbody>
          {product.map(d => (
            <tr key={d.idproduct}>
              <td>{d.idproduct}</td>
              <td>{d.name}</td>
              <td>{d.shortdescription}</td>
              <td>{d.longdescription}</td>
              <td>{d.price}</td>
              <td>{d.stock}</td>
              <td>
                <a href={d.smallurl} alt={d.name}>
                  Thumb
                </a>
              </td>
              <td>
                <a href={d.bigurl} alt={d.name}>
                  Full
                </a>
              </td>
              <td>{d.type_idtype}</td>
              <td>
                <Link to={`/admin/modifproduct/${d.idproduct}`}>
                  <img src={modifier}></img>
                </Link>
              </td>
              <td
                className='pointer'
                onClick={() => {
                  axios
                    .delete(`http://localhost:3030/products/${d.idproduct}`)
                    .then(res => {
                      setMessage(res.data)
                      setTrigger(!trigger)
                    })
                    .catch(e => {
                      setMessage(
                        `Erreur lors de la suppression : ${e.response.data}`
                      )
                    })
                }}
              >
                ❌
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='message'>{message}</p>
    </div>
  )
}

export default SeeProducts
