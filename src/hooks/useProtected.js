import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const useProtected = () => {
  const [isLoading, setIsloading] = useState(true)
  let history = useHistory()

  const protectedRoute = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'POST',
      url: 'http://localhost:3030/account/protected',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res)
      if (res.data.idAccount) {
        console.log('token valide')
      } else {
        history.push('/denied')
        console.log('token invalid')
      }
      setIsloading(false)
    })
  }
  useEffect(() => {
    protectedRoute()
  }, [])
  return [isLoading]
}
