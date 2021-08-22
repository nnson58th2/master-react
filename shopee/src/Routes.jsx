import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'

import Loading from './components/Loading/Loading'

const AuthenticatedGuard = lazy(() => import('./guards/AuthenticatedGuard'))
const UnauthenticatedGuard = lazy(() => import('./guards/UnauthenticatedGuard'))

const MainLayout = lazy(() => import('./layouts/MainLayout/MainLayout'))
const CartLayout = lazy(() => import('./layouts/CartLayout/CartLayout'))
const RegisterLayout = lazy(() => import('./layouts/RegisterLayout/RegisterLayout'))

const Cart = lazy(() => import('./pages/Cart/Cart'))
const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const User = lazy(() => import('./pages/User/User'))

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Suspense fallback={<Loading />}>
          <MainLayout>
            <Home />
          </MainLayout>
        </Suspense>
      </Route>

      <Route path={path.productDetail} exact>
        <Suspense fallback={<Loading />}>
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        </Suspense>
      </Route>

      <Route path={path.login}>
        <Suspense fallback={<Loading />}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Suspense>
      </Route>

      <Route path={path.register}>
        <Suspense fallback={<Loading />}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Register />
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Suspense>
      </Route>

      <Route path={path.user}>
        <Suspense fallback={<Loading />}>
          <AuthenticatedGuard>
            <MainLayout>
              <User />
            </MainLayout>
          </AuthenticatedGuard>
        </Suspense>
      </Route>

      <Route path={path.cart}>
        <Suspense fallback={<Loading />}>
          <AuthenticatedGuard>
            <CartLayout>
              <Cart />
            </CartLayout>
          </AuthenticatedGuard>
        </Suspense>
      </Route>

      <Route path={path.notFound}>
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>
  )
}
