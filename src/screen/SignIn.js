import axios from 'axios'
import { useState } from 'react'

const SignIn = () => {
  const [message, setMessage] = useState(null)
  const onSubmit = e => {
    e.preventDefault()

    e.target.password.value === ''
      ? setMessage('Veuillez saisir votre mot de passe.')
      : e.target.mail.value === ''
      ? setMessage('Veuillez saisir votre email.')
      : axios
          .post('http://localhost:3300/account/signin', {
            password: e.target.password.value,
            mail: e.target.mail.value
          })
          .then(res => {
            if (res.data === 'failed') {
              setMessage('Email ou mot de passe incorrect.')
            } else {
              setMessage('Identification réussi')
              localStorage.setItem('token', res.headers['x-access-token'])
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
