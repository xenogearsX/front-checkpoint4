import { useState } from 'react'
import { Link } from 'react-router-dom'

const CartItem = item => {
  const product = item.item
  const cart = item.cart
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
          item.setTrigger(!item.trigger)
          if (quantity > 0) {
            setQuantity(quantity - 1)
            tempCart[
              tempCart.findIndex(
                product => product.idproduct === item.item.idproduct
              )
            ].quantity -= 1
            item.setCart(tempCart)
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
          item.setCart(tempCart)
          item.setTrigger(!item.trigger)
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
          item.setCart(tempCart)
          item.setTrigger(!item.trigger)
        }}
      >
        ❌
      </td>
    </tr>
  )
}

export default CartItem
