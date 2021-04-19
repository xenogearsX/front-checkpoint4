import { useState } from 'react'
import axios from 'axios'

const AdminTypeGroups = () => {
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
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Création d&apos;un groupe produit</h1>
      </div>
      {message ? <p>{message}</p> : null}
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
              className='btnEnvoyer'
              type='submit'
              value='Valider le groupe de produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminTypeGroups
