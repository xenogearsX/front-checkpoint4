import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const CartItem = item => {
  const product = item.item
  const context = useContext(UserContext)
  const cart = context[0]
  const [quantity, setQuantity] = useState(item.item.quantity)
  const tempCart = cart
  return (
    <tr>
      <td>
        <Link to={{ pathname: `/details/${product.idproduct}`, props: 'cart' }}>
          <img src={product.smallurl} alt={product.name} />
        </Link>
      </td>
      <td>{product.name}</td>
      <td
        className='quantityOperation'
        onClick={() => {
          context[3](!context[2])
          if (quantity > 0) {
            setQuantity(quantity - 1)
            tempCart[
              tempCart.findIndex(
                product => product.idproduct === item.item.idproduct
              )
            ].quantity -= 1
            context[1](tempCart)
          }
        }}
      >
        -
      </td>
      <td>{quantity}</td>
      <td
        className='quantityOperation'
        onClick={() => {
          setQuantity(quantity + 1)
          tempCart[
            tempCart.findIndex(
              product => product.idproduct === item.item.idproduct
            )
          ].quantity += 1
          context[1](tempCart)
          context[3](!context[2])
        }}
      >
        +
      </td>
      <td>
        {product.quantity > product.stock ? 'Indisponible' : 'Disponible'}
      </td>
      <td className='price'>{quantity * product.price}</td>
      <td
        className='quantityOperation'
        onClick={() => {
          tempCart.splice(
            tempCart.findIndex(
              product => product.idproduct === item.item.idproduct
            ),
            1
          )
          context[1](tempCart)
          context[3](!context[2])
        }}
      >
        ❌
      </td>
    </tr>
  )
}

export default CartItem
