import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'

import MainLayout from './layouts/MainLayout/MainLayout'
import CartLayout from './layouts/CartLayout/CartLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'

import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Register from './pages/Auth/Register/Register'
import User from './pages/User/User'

import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>

      <Route path={path.productDetail} exact>
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      </Route>

      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <User />
          </MainLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Cart />
          </CartLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
