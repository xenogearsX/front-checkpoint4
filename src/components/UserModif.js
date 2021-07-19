import { useEffect, useState } from 'react'

import axios from 'axios'

import useProtected from '../hooks/useProtected'

const UserModif = account => {
  useProtected()

  const [message, setMessage] = useState(null)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  const [zipCode, setZipCode] = useState('')

  const allPut = {
    email: email,
    firstname: firstname,
    lastname: lastname,
    streetnumber: streetNumber,
    streetname: streetName,
    zipcode: zipCode,
    city: city,
    country: country
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3030/account/${account.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setEmail(data[0].email)
        setFirstname(data[0].firstname)
        setLastname(data[0].lastname)
        setStreetNumber(data[0].streetnumber)
        setStreetName(data[0].streetname)
        setZipCode(data[0].zipcode)
        setCity(data[0].city)
        setCountry(data[0].country)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : e.target.name === 'firstname'
      ? setFirstname(e.target.value)
      : e.target.name === 'lastname'
      ? setLastname(e.target.value)
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
    axios
      .put(`http://localhost:3030/account/${account.match.params.id}`, allPut)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }
  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification de vos données personnelles</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='email'>
              Email<span> * </span>
            </legend>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleChange}
              required
              value={email}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='firstname'>
              Prénom<span> * </span>
            </legend>
            <input
              type='text'
              id='firstname'
              name='firstname'
              onChange={handleChange}
              required
              value={firstname}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='lastname'>
              Nom<span> * </span>
            </legend>
            <input
              type='text'
              id='lastname'
              name='lastname'
              onChange={handleChange}
              required
              value={lastname}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='streetNumber'>
              N°<span> * </span>
            </legend>
            <input
              type='text'
              id='streetNumber'
              name='streetNumber'
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
              onChange={handleChange}
              required
              value={streetName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='zipCode'>
              Code postale<span> * </span>
            </legend>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
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

export default UserModif
