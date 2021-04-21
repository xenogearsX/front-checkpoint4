const Select = option => {
  const handleChange = e => option.filter(e.target.value)
  return (
    <select className='select' onChange={handleChange}>
      <option value='all'>Tous les produits</option>
      {option.props.map(product => (
        <option key={product.idproduct} value={product.typename}>
          {product.typename}
        </option>
      ))}
    </select>
  )
}

export default Select
