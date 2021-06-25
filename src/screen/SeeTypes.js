import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import { useProtected } from '../hooks/useProtected'

import modifier from '../data/images/Modifier.png'

const SeeTypes = () => {
  useProtected()

  const [type, setType] = useState([])
  const [message, setMessage] = useState('')
  const [trigger, setTrigger] = useState(1)
  useEffect(() => {
    axios
      .get('http://localhost:3030/types')
      .then(res => setType(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [trigger])
  return (
    <div className='table'>
      <h1>Types produits dans la BDD</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Type produit</th>
            <th>Id groupe produit</th>
            <th>Modifier</th>
            <th>Suppr.</th>
          </tr>
        </thead>
        <tbody>
          {type.map(d => (
            <tr key={d.idtype}>
              <td>{d.idtype}</td>
              <td>{d.typename}</td>
              <td>{d.typegroup_idtypegroup}</td>
              <td>
                <Link to={`/admin/modiftype/${d.idtype}`}>
                  <img src={modifier}></img>
                </Link>
              </td>
              <td
                className='pointer'
                onClick={() => {
                  axios
                    .delete(`http://localhost:3030/types/${d.idtype}`)
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

export default SeeTypes
