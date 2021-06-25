import { useState } from 'react'
import axios from 'axios'

import { useProtected } from '../hooks/useProtected'

const AdminTypeGroups = () => {
  useProtected()

  const [groupname, setGroupname] = useState('')
  const [message, setMessage] = useState(null)
  const allPost = {
    groupname: groupname
  }

  const handleChange = e => setGroupname(e.target.value)

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3030/typegroups', allPost)
      .then(res => {
        setMessage(res.data + ' ' + groupname)
      })
      .catch(e => {
        setMessage(
          `Erreur lors de la création : ${
            e.response ? e.response.data : e.message
          }`
        )
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Création d&apos;un groupe produit</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Nom groupe produit<span> * </span>
            </legend>
            <input
              type='text'
              id='name'
              placeholder='ex: bijoux'
              onChange={handleChange}
              required
              value={groupname}
            />
          </fieldset>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='send'
              type='submit'
              value='Créer le groupe produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminTypeGroups
