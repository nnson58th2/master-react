import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/profile/Profile'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'

export const path = {
  home: '/',
  register: '/register',
  profile: '/profile',
  profileInfo: '/profile/info/:profileId',
  profilePurchase: '/profile/purchase',
  student: '/student'
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Redirect from="/students" to={path.student} />
          <Route path={path.home} exact>
            <Home />
          </Route>
          <Route path={path.register}>
            <Register />
          </Route>
          <Route path={path.student} component={() => <StudentManagement isLogged={true} />} />
          <Route path={path.profile}>
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
