import { useContext } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Admin from '../screen/Admin'
import AdminProducts from '../screen/AdminProducts'
import AdminTypeGroups from '../screen/AdminTypeGroups'
import AdminTypes from '../screen/AdminTypes'
import ModifProduct from '../screen/ModifProduct'
import ModifType from '../screen/ModifType'
import ModifTypeGroup from '../screen/ModifTypeGroup'
import SeeProducts from '../screen/SeeProducts'
import SeeTypeGroups from '../screen/SeeTypeGroups'
import SeeTypes from '../screen/SeeTypes'
import { useProtected } from '../hooks/useProtected'
import UserContext from '../context/UserContext'

import './NavAdmin.css'

const NavAdmin = () => {
  const [isLoading] = useProtected()
  const admin = useContext(UserContext)[7]

  return (
    <div id='navAdmin'>
      {isLoading ? (
        'loading'
      ) : admin ? (
        <>
          <div className='navAdmin'>
            <ul>
              <li>
                <NavLink
                  to='/admin/products'
                  className='link'
                  activeClassName='selected'
                >
                  Création produit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/types'
                  className='link'
                  activeClassName='selected'
                >
                  Création type produit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/typegroups'
                  className='link'
                  activeClassName='selected'
                >
                  Création groupe produit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/seeproducts'
                  className='link'
                  activeClassName='selected'
                >
                  Voir produits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/seetypes'
                  className='link'
                  activeClassName='selected'
                >
                  Voir types produits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/seetypegroups'
                  className='link'
                  activeClassName='selected'
                >
                  Voir groupes produits
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
              <Route path='/admin/seeproducts' component={SeeProducts} />
              <Route path='/admin/seetypes' component={SeeTypes} />
              <Route path='/admin/seetypegroups' component={SeeTypeGroups} />
              <Route path='/admin/modifproduct/:id' component={ModifProduct} />
              <Route
                path='/admin/modiftypegroup/:id'
                component={ModifTypeGroup}
              />
              <Route path='/admin/modiftype/:id' component={ModifType} />
            </Switch>
          </div>
        </>
      ) : (
        'Accès refusé'
      )}
    </div>
  )
}

export default NavAdmin
