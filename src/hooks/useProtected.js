import { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

import UserContext from '../context/UserContext'

const useProtected = () => {
  const account = useContext(UserContext)
  const [isLoading, setIsloading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    protectedRoute()
  }, [])

  const protectedRoute = () => {
    const token = localStorage.getItem('token')
    axios
      .post('http://localhost:3030/account/protected', {
        authorization: `Bearer ${token}`
      })
      .then(res => {
        if (res.data.idAccount) {
          account[6](res.data.idAccount)
          account[8](res.data.isAdmin)
        } else {
          history.push('/denied')
        }
        setIsloading(false)
      })
      .catch(e => console.log(e.response.data))
  }
  return [isLoading]
}

export default useProtected
