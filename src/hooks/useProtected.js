import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../context/UserContext'

export const useProtected = () => {
  const account = useContext(UserContext)
  const [isLoading, setIsloading] = useState(true)
  let history = useHistory()

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
        console.log(res)
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
