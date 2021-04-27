const Cart = cart => {
  console.log(cart)
  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {cart.cartItems.map(item => (
        <p key={item.idproduct}>
          {item.name}, {item.quantity}
        </p>
      ))}
    </div>
  )
}

export default Cart
