import { useContext, useState } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import { useHistory } from 'react-router'

const SignIn = origin => {
  const [message, setMessage] = useState(null)

  const account = useContext(UserContext)[6]
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()

    e.target.password.value === ''
      ? setMessage('Veuillez saisir votre mot de passe.')
      : e.target.mail.value === ''
      ? setMessage('Veuillez saisir votre email.')
      : axios
          .post('http://localhost:3030/account/signin', {
            email: e.target.mail.value,
            password: e.target.password.value
          })
          .then(res => {
            if (res.data === 'failed') {
              setMessage('Email ou mot de passe incorrect.')
            } else {
              account(res.data.idaccount)
              setMessage('Identification réussi')
              localStorage.setItem('token', res.headers['x-access-token'])
              origin.location.origin
                ? history.push(origin.location.origin)
                : null
            }
          })
  }
  return (
    <div>
      <h1>Identifiez-vous</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor='mail'>Identifiant : </label>
          <input
            name='mail'
            className='login'
            type='mail'
            placeholder='votremail@exemple.com'
          ></input>
          <label htmlFor='password'>Mot de passe : </label>
          <input name='password' type='password' className='login' />
          <input type='submit' value='Je me connecte' />
        </fieldset>
      </form>
      {message ? <p>{message}</p> : null}
    </div>
  )
}

export default SignIn
