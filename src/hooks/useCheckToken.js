import { useContext, useEffect } from 'react'

import axios from 'axios'

import UserContext from '../context/UserContext'

const useCheckToken = () => {
  const account = useContext(UserContext)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      axios
        .post('http://localhost:3030/account/protected', {
          authorization: `Bearer ${token}`
        })
        .then(res => {
          if (res.data.idAccount) {
            account[6](res.data.idAccount)
            account[8](res.data.isAdmin)
          }
        })
    }
  }
}

export default useCheckToken
