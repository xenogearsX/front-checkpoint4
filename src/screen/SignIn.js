import { useContext, useState } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import { useHistory } from 'react-router'

import './SignIn.css'

const SignIn = origin => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  const account = useContext(UserContext)
  const history = useHistory()

  const checkEnter = e => (e.key === 'Enter' ? onSubmit() : null)
  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value)
  }
  const onSubmit = () => {
    password === ''
      ? setMessage('Veuillez saisir votre mot de passe.')
      : email === ''
      ? setMessage('Veuillez saisir votre email.')
      : axios
          .post('http://localhost:3030/account/signin', {
            email: email,
            password: password
          })
          .then(res => {
            if (res.data === 'failed') {
              setMessage('Email ou mot de passe incorrect.')
            } else {
              account[6](res.data.idAccount)
              account[8](res.data.isAdmin)
              setMessage('Identification réussi')
              localStorage.setItem('token', res.headers['x-access-token'])
              origin.location
                ? history.push(origin.location.origin)
                : history.push('')
            }
          })
  }
  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Identifiez-vous</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
      <div className='containerAdmin'>
        <fieldset className='formData'>
          <legend htmlFor='email'>
            Email<span> * </span>
          </legend>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='votremail@exemple.com'
            onChange={handleChange}
            onKeyDown={checkEnter}
            required
            value={email}
          />
        </fieldset>
        <fieldset className='formData'>
          <legend htmlFor='password' className='passwordLegend'>
            Mot de passe<span> * </span>
          </legend>
          <div className='password'>
            <input
              type={showPassword ? 'password' : 'text'}
              id='password'
              name='password'
              onChange={handleChange}
              onKeyDown={checkEnter}
              required
              value={password}
            />
            <button
              className={showPassword ? 'showPassword' : 'showPassword cross'}
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>
        </fieldset>
        <p className='required'>
          <span> * </span> Obligatoire
        </p>
        <button className='connect' onClick={onSubmit}>
          Je me connecte
        </button>
      </div>
    </div>
  )
}

export default SignIn
