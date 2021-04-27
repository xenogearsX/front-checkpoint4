import CartItem from './CartItem'

import './Cart.css'
import { useEffect, useState } from 'react'

const Cart = cart => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    document
      .querySelectorAll('.price')
      .forEach(price => setTotal(total + Number(price.innerHTML)))
  }, [])

  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {cart.cartItems.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Produit</th>
              <th>Retirer</th>
              <th>Quantité</th>
              <th>Ajouter</th>
              <th>Disponibilité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map(item => (
              <CartItem
                item={item}
                cart={cart.cartItems}
                setCart={cart.setCart}
                key={item.idproduct}
              />
            ))}
            <tr>
              <td colSpan='6'>total</td>
              <td>1 milliard</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Aucun produit dans votre panier</p>
      )}
    </div>
  )
}

export default Cart
