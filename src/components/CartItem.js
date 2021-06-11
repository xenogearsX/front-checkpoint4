import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const CartItem = item => {
  const product = item.item
  const context = useContext(UserContext)
  const cart = context[0]
  const [quantity, setQuantity] = useState(item.item.quantity)
  const tempCart = cart

  const saveInContext = () => {
    context[1](tempCart)
    context[3](!context[2])
  }

  const findIndex = tempCart.findIndex(
    product => product.idproduct === item.item.idproduct
  )

  const handleQuantity = e => {
    let tempQuantity = quantity
    e.target.innerHTML === '-'
      ? tempQuantity > 0
        ? (tempQuantity -= 1)
        : null
      : (tempQuantity += 1)
    setQuantity(tempQuantity)
    tempCart[findIndex].quantity = tempQuantity
    saveInContext()
  }

  const handleChange = e => {
    setQuantity(Number(e.target.value))
    tempCart[findIndex].quantity = Number(e.target.value)
    saveInContext()
  }

  const handleDelete = () => {
    tempCart.splice(findIndex, 1)
    saveInContext()
  }

  return (
    <tr>
      <td>
        <Link to={{ pathname: `/details/${product.idproduct}`, props: 'cart' }}>
          <img src={product.smallurl} alt={product.name} />
        </Link>
      </td>
      <td>{product.name}</td>
      <td className='quantityOperation' onClick={handleQuantity}>
        -
      </td>
      <td>
        <input type='number' value={quantity} onChange={handleChange} min='0' />
      </td>
      <td className='quantityOperation' onClick={handleQuantity}>
        +
      </td>
      <td>
        {product.quantity > product.stock ? 'Indisponible' : 'Disponible'}
      </td>
      <td className='price'>{quantity * product.price}</td>
      <td className='quantityOperation' onClick={handleDelete}>
        ❌
      </td>
    </tr>
  )
}

export default CartItem
