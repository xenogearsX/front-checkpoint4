import axios from 'axios'
import { useEffect, useState } from 'react'

const AdminProducts = () => {
  const [shortDes, setShortDes] = useState('')
  const [longDes, setLongDes] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [smallUrl, setSmallUrl] = useState('')
  const [bigUrl, setBigUrl] = useState('')
  const [typeIdType, setTypeIdType] = useState('')
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')
  const [select, setSelect] = useState(null)

  const allPost = {
    name: name,
    shortdescription: shortDes,
    longdescription: longDes,
    price: price,
    stock: stock,
    smallurl: smallUrl,
    bigurl: bigUrl,
    type_idtype: typeIdType
  }

  useEffect(() => {
    axios
      .get('http://localhost:3030/types')
      .then(res => res.data)
      .then(data => setSelect(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : e.target.name === 'shortDes'
      ? setShortDes(e.target.value)
      : e.target.name === 'longDes'
      ? setLongDes(e.target.value)
      : e.target.name === 'price'
      ? setPrice(e.target.value)
      : e.target.name === 'stock'
      ? setStock(e.target.value)
      : e.target.name === 'smallUrl'
      ? setSmallUrl(e.target.value)
      : e.target.name === 'bigUrl'
      ? setBigUrl(e.target.value)
      : setTypeIdType(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3030/products', allPost)
      .then(res => {
        setMessage(res.data + ' ' + name)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Création d&apos;un produit</h1>
      </div>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Nom produit<span> * </span>
            </legend>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='ex: bijoux'
              onChange={handleChange}
              required
              value={name}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='shortDes'>
              Description courte produit<span> * </span>
            </legend>
            <input
              type='text'
              id='shortDes'
              name='shortDes'
              placeholder='Description courte'
              onChange={handleChange}
              required
              value={shortDes}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='longDes'>
              Description détaillée produit<span> * </span>
            </legend>
            <input
              type='text'
              id='longDes'
              name='longDes'
              placeholder='Description détaillée'
              onChange={handleChange}
              required
              value={longDes}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='price'>
              Prix produit<span> * </span>
            </legend>
            <input
              type='text'
              id='price'
              name='price'
              placeholder='Nombre sans devise'
              onChange={handleChange}
              required
              value={price}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='stock'>
              Stock produit<span> * </span>
            </legend>
            <input
              type='text'
              id='stock'
              name='stock'
              placeholder='Nombre'
              onChange={handleChange}
              required
              value={stock}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='smallUrl'>
              Petite image produit<span> * </span>
            </legend>
            <input
              type='text'
              id='smallUrl'
              name='smallUrl'
              placeholder='Url petite image'
              onChange={handleChange}
              required
              value={smallUrl}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='bigUrl'>
              Grande image produit<span> * </span>
            </legend>
            <input
              type='text'
              id='bigUrl'
              name='bigUrl'
              placeholder='Url image grand format'
              onChange={handleChange}
              required
              value={bigUrl}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='compte'>
              Type produit<span> * </span>
            </legend>
            <select id='type' name='type' onChange={handleChange}>
              <option>Sélectionne le type produit</option>
              {select
                ? select.map(option => (
                    <option key={option.idtype} value={option.idtype}>
                      {option.typename}
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
              className='btnEnvoyer'
              type='submit'
              value='Valider le type produit'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminProducts
