import CartItem from './CartItem'

import './Cart.css'

const Cart = cart => {
  return (
    <div className='cart'>
      <h2>Votre panier</h2>
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
              <th>Suppr.</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map(item => (
              <CartItem
                item={item}
                cart={cart.cartItems}
                setCart={cart.setCart}
                key={item.idproduct}
                setTrigger={cart.setTrigger}
                trigger={cart.trigger}
              />
            ))}
            <tr>
              <td colSpan='6'>Total</td>
              <td>{cart.total}</td>
              <td></td>
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
