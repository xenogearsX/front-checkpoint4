import { useEffect, useState } from 'react'
import axios from 'axios'

const ModifProduct = product => {
  const [bigUrl, setBigUrl] = useState('')
  const [longDes, setLongDes] = useState('')
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [smallUrl, setSmallUrl] = useState('')
  const [shortDes, setShortDes] = useState('')
  const [stock, setStock] = useState('')
  const [typeIdType, setTypeIdType] = useState('')

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
      .get(`http://localhost:3030/products/${product.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setName(data[0].name)
        setShortDes(data[0].shortdescription)
        setLongDes(data[0].longdescription)
        setPrice(data[0].price)
        setStock(data[0].stock)
        setSmallUrl(data[0].smallurl)
        setBigUrl(data[0].bigurl)
        setTypeIdType(data[0].type_idtype)
      })
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
      .put(`http://localhost:3030/products/${product.match.params.id}`, allPost)
      .then(res => {
        setMessage('Modification réussie de ' + res.data.name)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification d&apos;un produit</h1>
      </div>
      {message ? <p className='message'>{message}</p> : null}
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
              onChange={handleChange}
              required
              value={bigUrl}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='type'>
              Type produit<span> * </span>
            </legend>
            <input
              type='text'
              id='type'
              name='type'
              onChange={handleChange}
              required
              value={typeIdType}
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

export default ModifProduct
