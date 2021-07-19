import { useContext, useEffect, useState } from 'react'

import axios from 'axios'

import UserContext from '../context/UserContext'

const UserOrders = () => {
  const account = useContext(UserContext)[5]
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3030/order/${account}`)
      .then(res => setOrders(res.data))
      .catch(e => console.log(`Erreur lors de la reception : ${e.message}`))
  }, [])

  return (
    <div>
      <h1>Vos commandes</h1>
      {orders.map(order => (
        <div key={order.idorder}>
          <h2>
            Commande n° {order.idorder} du {order.date}
          </h2>
          {order.orderitems.map(item => (
            <ul key={item.idproduct}>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.quantity}</li>
            </ul>
          ))}
          <p>Total : {order.total}</p>
        </div>
      ))}
    </div>
  )
}

export default UserOrders
