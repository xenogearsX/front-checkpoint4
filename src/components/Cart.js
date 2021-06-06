import CartItem from './CartItem'

import './Cart.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'

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
              <th>Retirer</th>
              <th>Quantité</th>
              <th>Ajouter</th>
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
              <td colSpan='6'>Total</td>
              <td>{cart[4]}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Aucun produit dans votre panier</p>
      )}
      {cart[5] !== null ? (
        <button
          onClick={() =>
            cart[0].length === 0
              ? setMessage('Commande impossible, panier vide')
              : axios
                  .post('http://localhost:3030/order', {
                    orderitems: JSON.stringify(
                      cart[0].map(element => {
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
                      })
                    ),
                    account_idaccount: cart[5]
                  })
                  .then(res => {
                    setMessage(res.data)
                  })
                  .catch(e => {
                    setMessage(`Erreur lors de la création : ${e.message}`)
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
      {message ? <p>{message}</p> : null}
    </div>
  )
}

export default Cart
