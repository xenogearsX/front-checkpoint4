import { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

import './UserDetails.css'

import modifier from '../data/images/Modifier.png'

const UserDetails = () => {
  const account = useContext(UserContext)[5]
  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3030/account/${account}`)
      .then(res => res.data[0])
      .then(data => {
        setUser(data)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return (
    <div className='userDetails'>
      <h1>Données personnelles</h1>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>n°</th>
            <th>Rue</th>
            <th>Code postale</th>
            <th>Ville</th>
            <th>Pays</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr key={user.idaccount}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.streetnumber}</td>
            <td>{user.streetname}</td>
            <td>{user.zipcode}</td>
            <td>{user.city}</td>
            <td>{user.country}</td>
            <td>
              <Link to={`/account/modifaccount/${user.idaccount}`}>
                <img src={modifier}></img>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails
