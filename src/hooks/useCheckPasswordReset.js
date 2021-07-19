import { useEffect, useState } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

const useCheckPasswordReset = jwt => {
  const [idAccount, setIdAccount] = useState(null)
  const history = useHistory()

  useEffect(() => {
    checkAccount()
  }, [])

  const checkAccount = () => {
    axios
      .post('http://localhost:3030/password/protected', {
        authorization: `Bearer ${jwt}`
      })
      .then(res => {
        if (res.data.idAccount) {
          setIdAccount(res.data.idAccount)
        } else {
          history.push('/badlink')
        }
      })
      .catch(e => console.log(e.response.data))
  }
  return [idAccount]
}

export default useCheckPasswordReset
