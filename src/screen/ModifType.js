import { useEffect, useState } from 'react'
import axios from 'axios'

import useProtected from '../hooks/useProtected'

const ModifType = types => {
  useProtected()

  const [idTypeGroup, setIdTypeGroup] = useState('')
  const [message, setMessage] = useState(null)
  const [typeName, setTypeName] = useState('')

  const allPost = {
    typename: typeName,
    typegroup_idtypegroup: idTypeGroup
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3030/types/${types.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setTypeName(data[0].typename)
        setIdTypeGroup(data[0].typegroup_idtypegroup)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'name'
      ? setTypeName(e.target.value)
      : setIdTypeGroup(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:3030/types/${types.match.params.id}`, allPost)
      .then(res => {
        setMessage('Modification réussie de ' + res.data.typename)
      })
      .catch(e => {
        setMessage(
          `Erreur lors de modification : ${
            e.response ? e.response.data : e.message
          }`
        )
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification du type produit {types.match.params.id}</h1>
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
              onChange={handleChange}
              required
              value={typeName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='typegroup'>
              Groupe produit<span> * </span>
            </legend>
            <input
              type='text'
              id='typegroup'
              name='typegroup'
              onChange={handleChange}
              required
              value={idTypeGroup}
            />
          </fieldset>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='send'
              type='submit'
              value='Modifier le type produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ModifType
