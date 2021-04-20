import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import modifier from '../images/Modifier.png'

const SeeTypes = () => {
  const [type, setType] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3030/types')
      .then(res => setType(res.data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Type produit</th>
            <th>Id groupe produit</th>
            <th>Modfier</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeeTypes
