import { useState } from 'react'

import axios from 'axios'

import useCheckPasswordReset from '../hooks/useCheckPasswordReset'

const ChangeForgotPassword = account => {
  const [idAccount] = useCheckPasswordReset(account.match.params.jwt)

  const [message, setMessage] = useState(null)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = e => setPassword(e.target.value)
  const submitForm = e => {
    e.preventDefault()
    password === ''
      ? setMessage('Veuillez saisir un mot de passe.')
      : axios
          .post('http://localhost:3030/password/reset', {
            password: password,
            idAccount: idAccount
          })
          .then(res => {
            setMessage(res.data)
          })
  }

  return idAccount ? (
    <div className='form'>
      <div className='formTitle'>
        <h1>Changement du mot de passe oublié</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend className='passwordLegend' htmlFor='password'>
              <p>
                Mot de passe<span> * </span>
              </p>
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
          <div className='formData'>
            <input
              className='send'
              type='submit'
              value='Valider le mot de passe'
            />
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className='loading'>Chargement...</div>
  )
}

export default ChangeForgotPassword
