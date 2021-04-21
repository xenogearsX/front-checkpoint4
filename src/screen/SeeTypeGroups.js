import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import modifier from '../data/images/Modifier.png'

const SeeTypeGroups = () => {
  const [typegroups, setTypeGroups] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/typegroups')
      .then(res => setTypeGroups(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='table'>
      <h1>Groupes produits dans la BDD</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom groupe produit</th>
            <th>Modifier</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeeTypeGroups
