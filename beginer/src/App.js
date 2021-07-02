import './App.css'
import AppContextProvider from './AppContext'
import Product from './Product.js'
import User from './User'

function App() {
  return (
    <div className="App">
      <Product />

      <AppContextProvider>
        <User />
      </AppContextProvider>
    </div>
  )
}

export default App
