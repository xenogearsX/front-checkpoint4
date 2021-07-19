import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import useProtected from '../hooks/useProtected'

import modifier from '../data/images/Modifier.png'

const SeeTypeGroups = () => {
  useProtected()

  const [typegroups, setTypeGroups] = useState([])
  const [message, setMessage] = useState('')
  const [trigger, setTrigger] = useState(1)
  useEffect(() => {
    axios
      .get('http://localhost:3030/typegroups')
      .then(res => setTypeGroups(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [trigger])
  return (
    <div className='table'>
      <h1>Groupes produits dans la BDD</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom groupe produit</th>
            <th>Modifier</th>
            <th>Suppr.</th>
          </tr>
        </thead>
        <tbody>
          {typegroups.map(d => (
            <tr key={d.idtypegroup}>
              <td>{d.idtypegroup}</td>
              <td>{d.groupname}</td>
              <td>
                <Link to={`/admin/modiftypegroup/${d.idtypegroup}`}>
                  <img src={modifier}></img>
                </Link>
              </td>
              <td
                className='pointer'
                onClick={() => {
                  axios
                    .delete(`http://localhost:3030/typegroups/${d.idtypegroup}`)
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

export default SeeTypeGroups
