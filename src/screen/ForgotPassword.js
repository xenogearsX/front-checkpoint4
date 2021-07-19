import { useState } from 'react'

import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const handleChange = e => setEmail(e.target.value)

  const submitForm = e => {
    e.preventDefault()
    email === ''
      ? setMessage('Veuillez saisir votre email.')
      : axios
          .post('http://localhost:3030/password/forgot', {
            email: email
          })
          .then(res => {
            setMessage(res.data)
          })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Réinitialisation mot de passe</h1>
      </div>
      <form onSubmit={submitForm}>
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

          <p className='required'>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='send'
              type='submit'
              value='Réinitialiser mot de passe'
            />
          </div>
        </div>
      </form>
      {message ? <p className='message'>{message}</p> : null}
    </div>
  )
}

export default ForgotPassword
