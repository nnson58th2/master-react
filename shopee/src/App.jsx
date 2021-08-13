import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import 'src/assets/styles/global.scss'

import Authorization from './components/Authorization/Authorization'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
