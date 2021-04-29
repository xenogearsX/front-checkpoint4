import ProductsCards from '../components/ProductsCards'

const Home = cart => {
  return (
    <div id='home'>
      <ProductsCards
        setCart={cart.setCart}
        cartItems={cart.cartItems}
        setTrigger={cart.setTrigger}
        trigger={cart.trigger}
      />
    </div>
  )
}

export default Home
