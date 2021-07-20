import { useContext, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import UserContext from '../context/UserContext'

import './Cart.css'

const Cart = () => {
  const [message, setMessage] = useState(null)
  const cart = useContext(UserContext)

  return (
    <div className='cart'>
      <h2>Votre panier</h2>
      {cart[0].length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Produit</th>
              <th>Quantité</th>
              <th>Disponibilité</th>
              <th>Prix</th>
              <th>Suppr.</th>
            </tr>
          </thead>
          <tbody>
            {cart[0].map(item => (
              <CartItem item={item} key={item.idproduct} />
            ))}
            <tr>
              <td colSpan='4'>Total</td>
              <td colSpan='2'>{cart[4]}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Aucun produit dans votre panier</p>
      )}
      {cart[5] !== null ? (
        <button
          className='add'
          onClick={() =>
            cart[0].length === 0 || cart[4] === 0
              ? setMessage('Commande impossible, panier vide')
              : axios
                  .post('http://localhost:3030/order', {
                    date: new Date().toLocaleDateString(),
                    orderitems: cart[0].map(element => {
                      const {
                        shortdescription,
                        longdescription,
                        smallurl,
                        bigurl,
                        type_idtype,
                        idtype,
                        typename,
                        typegroup_idtypegroup,
                        ...item
                      } = element
                      return item
                    }),
                    total: cart[4],
                    account_idaccount: cart[5]
                  })
                  .then(res => {
                    setMessage(res.data)
                    cart[1]([])
                  })
                  .catch(e => {
                    setMessage(`Erreur lors de la commande : ${e.message}`)
                  })
          }
        >
          Commander
        </button>
      ) : (
        <Link to={{ pathname: '/signin', origin: '/cart' }}>
          Identification avant commande
        </Link>
      )}
      {message ? <p className='message'>{message}</p> : null}
    </div>
  )
}

export default Cart
