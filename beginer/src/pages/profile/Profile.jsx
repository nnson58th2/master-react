import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { path } from '../../App'
import NotFound from '../NotFound'
import ProfileInfo from './ProfileInfo'
import ProfilePurchase from './ProfilePurchase'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <NavLink to={path.profile + '/info/123'}>Profile Info</NavLink>
        </li>
        <li>
          <NavLink to={path.profilePurchase}>Profile Purchase</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={path.profileInfo}>
          <ProfileInfo />
        </Route>

        <Route path={path.profilePurchase}>
          <ProfilePurchase />
        </Route>

        <Route path={path.profile} exact />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
