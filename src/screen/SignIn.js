import { useContext, useState } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

import './SignIn.css'

const SignIn = origin => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const account = useContext(UserContext)
  const history = useHistory()

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    axios
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
      <form onSubmit={onSubmit}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='email'>
              Email<span> * </span>
            </legend>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='example@mail.com'
              onChange={handleChange}
              required
              value={email}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend className='passwordLegend' htmlFor='password'>
              <p>
                Mot de passe<span> * </span>
              </p>
              <Link to='/forgot' className='forgotLink'>
                Mot de passe oublié
              </Link>
            </legend>
            <div className='passwordForm'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                placeholder='example123$'
                onChange={handleChange}
                required
                value={password}
              />
              <button
                className={showPassword ? 'showPassword cross' : 'showPassword'}
                onClick={e => {
                  e.preventDefault()
                  setShowPassword(!showPassword)
                }}
              >
                👁️
              </button>
            </div>
          </fieldset>
          <p className='required'>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='send' type='submit' value='Je me connecte' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
