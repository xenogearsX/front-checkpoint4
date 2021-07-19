import { useEffect, useState } from 'react'
import axios from 'axios'

import useProtected from '../hooks/useProtected'

const AdminTypes = () => {
  useProtected()

  const [idTypeGroup, setIdTypeGroup] = useState('')
  const [message, setMessage] = useState(null)
  const [typeName, setTypename] = useState('')
  const [select, setSelect] = useState(null)

  const allPost = {
    typename: typeName,
    typegroup_idtypegroup: idTypeGroup
  }

  useEffect(() => {
    axios
      .get('http://localhost:3030/typegroups')
      .then(res => res.data)
      .then(data => setSelect(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'name'
      ? setTypename(e.target.value)
      : setIdTypeGroup(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3030/types', allPost)
      .then(res => {
        setMessage(res.data + ' ' + typeName)
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
        <h1>Création d&apos;un type produit</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Type produit<span> * </span>
            </legend>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='ex: collier'
              onChange={handleChange}
              required
              value={typeName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='typegroup'>
              Groupe produit<span> * </span>
            </legend>
            <select id='typegroup' name='typegroup' onChange={handleChange}>
              <option>Sélectionne le groupe produit</option>
              {select
                ? select.map(option => (
                    <option key={option.idtypegroup} value={option.idtypegroup}>
                      {option.groupname}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='send'
              type='submit'
              value='Créer le type produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminTypes
