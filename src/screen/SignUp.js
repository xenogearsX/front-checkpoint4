import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('France')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const allPost = {
    email: email,
    password: password,
    firstname: firstName,
    lastname: lastName,
    streetnumber: streetNumber,
    streetname: streetName,
    zipcode: zipCode,
    city: city,
    country: country
  }

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : e.target.name === 'password'
      ? setPassword(e.target.value)
      : e.target.name === 'confirmPassword'
      ? setConfirmPassword(e.target.value)
      : e.target.name === 'firstName'
      ? setFirstName(e.target.value)
      : e.target.name === 'lastName'
      ? setLastName(e.target.value)
      : e.target.name === 'streetNumber'
      ? setStreetNumber(e.target.value)
      : e.target.name === 'streetName'
      ? setStreetName(e.target.value)
      : e.target.name === 'zipCode'
      ? setZipCode(e.target.value)
      : e.target.name === 'city'
      ? setCity(e.target.value)
      : setCountry(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    password === confirmPassword
      ? axios
          .post('http://localhost:3030/account', allPost)
          .then(res => {
            setMessage(res.data + ' ' + email)
          })
          .catch(e => {
            setMessage(`Erreur lors de la création : ${e.message}`)
          })
      : setMessage('Les mots de passe ne correspondent pas.')
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Création d&apos;un compte</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
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
          <fieldset className='formData'>
            <legend htmlFor='password'>
              Mot de passe<span> * </span>
            </legend>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='example123$'
              onChange={handleChange}
              required
              value={password}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='confirmPassword'>
              Confirmez le mot de passe<span> * </span>
            </legend>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Veuillez retaper votre mot de passe'
              onChange={handleChange}
              required
              value={confirmPassword}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='firstName'>
              Prénom<span> * </span>
            </legend>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Bill'
              onChange={handleChange}
              required
              value={firstName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='lastName'>
              Nom<span> * </span>
            </legend>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Gates'
              onChange={handleChange}
              required
              value={lastName}
            />
          </fieldset>
          <h2>Adresse</h2>
          <fieldset className='formData'>
            <legend htmlFor='streetNumber'>
              N° de rue<span> * </span>
            </legend>
            <input
              type='number'
              id='streetNumber'
              name='streetNumber'
              placeholder='nombre'
              onChange={handleChange}
              required
              value={streetNumber}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='streetName'>
              Nom de rue<span> * </span>
            </legend>
            <input
              type='text'
              id='streetName'
              name='streetName'
              placeholder='rue de la Paix'
              onChange={handleChange}
              required
              value={streetName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='zipCode'>
              Code postal<span> * </span>
            </legend>
            <input
              type='number'
              id='zipCode'
              name='zipCode'
              placeholder='75001'
              onChange={handleChange}
              required
              value={zipCode}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='city'>
              Ville<span> * </span>
            </legend>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Paris'
              onChange={handleChange}
              required
              value={city}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='country'>
              Pays<span> * </span>
            </legend>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Url image grand format'
              onChange={handleChange}
              required
              value={country}
            />
          </fieldset>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='send' type='submit' value='Valider le produit' />
          </div>
        </div>
      </form>
    </div>
  )
}
export default SignUp