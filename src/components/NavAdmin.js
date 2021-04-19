import { NavLink, Route, Switch } from 'react-router-dom'
import Admin from '../screen/Admin'
import AdminProducts from '../screen/AdminProducts'
import AdminTypeGroups from '../screen/AdminTypeGroups'
import AdminTypes from '../screen/AdminTypes'

const NavAdmin = () => {
  return (
    <div id='navAdmin'>
      <div className='navAdmin'>
        <ul>
          <li>
            <NavLink
              to='/admin/products'
              className='link'
              activeClassName='selected'
            >
              Produit
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin/types'
              className='link'
              activeClassName='selected'
            >
              Type
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin/typegroups'
              className='link'
              activeClassName='selected'
            >
              Groupe Produit
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='adminForm'>
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route path='/admin/products' component={AdminProducts} />
          <Route path='/admin/types' component={AdminTypes} />
          <Route path='/admin/typegroups' component={AdminTypeGroups} />
        </Switch>
      </div>
    </div>
  )
}

export default NavAdmin
