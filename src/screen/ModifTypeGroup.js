import { useEffect, useState } from 'react'
import axios from 'axios'

const ModifTypeGroup = typegroup => {
  const [groupname, setGroupname] = useState('')
  const [message, setMessage] = useState(null)
  const allPost = {
    groupname: groupname
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3030/typegroups/${typegroup.match.params.id}`)
      .then(res => setGroupname(res.data[0].groupname))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => setGroupname(e.target.value)

  const submitForm = e => {
    e.preventDefault()
    axios
      .put(
        `http://localhost:3030/typegroups/${typegroup.match.params.id}`,
        allPost
      )
      .then(res => {
        setMessage('Modification réussie de ' + res.data.groupname)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification du groupe produit {typegroup.match.params.id}</h1>
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
              value='Valider le groupe de produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ModifTypeGroup
