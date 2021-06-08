import { useContext, useEffect } from 'react'

import axios from 'axios'

import UserContext from '../context/UserContext'

export const useCheckToken = () => {
  const account = useContext(UserContext)

  const checkToken = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'POST',
      url: 'http://localhost:3030/account/protected',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.data.idAccount) {
        account[6](res.data.idAccount)
        account[8](res.data.isAdmin)
      }
    })
  }
  useEffect(() => {
    checkToken()
  }, [])
  return
}
