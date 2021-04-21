import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import modifier from '../data/images/Modifier.png'

const SeeProducts = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/products')
      .then(res => setProduct(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
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
            <th>Modfier</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeeProducts
