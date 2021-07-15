import React, { useEffect } from 'react'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'
import { path } from '../App'

export default function Header() {
  const history = useHistory()
  const location = useLocation()

  // useEffect(() => {
  //   console.log(location)
  // }, [location])

  return (
    <div>
      <ul>
        <li>
          <Link to={path.home}>Home</Link>
        </li>
        <li>
          <Link to={path.register}>Register</Link>
        </li>
        <li>
          <NavLink to={path.student}>Student</NavLink>
        </li>
        <li>
          <NavLink to={path.profile}>Profile</NavLink>
        </li>
        <button onClick={() => history.push(path.profile)}>Chuyển trang profile</button>
        <button onClick={() => history.goBack()}>Chuyển về trang trước đó</button>
        <button onClick={() => history.goForward()}>Chuyển đến trang sau đó</button>
      </ul>
    </div>
  )
}
