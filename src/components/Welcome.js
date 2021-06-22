import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

const Welcome = () => {
  const [user, setUser] = useState('')
  const account = useContext(UserContext)[5]
  useEffect(() => {
    axios
      .get(`http://localhost:3030/account/${account}`)
      .then(res => res.data[0])
      .then(data => {
        setUser(data.firstname)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return <div>Bienvenue dans votre compte {user}.</div>
}

export default Welcome
