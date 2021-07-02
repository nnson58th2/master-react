import React, { useContext } from 'react'

const AppContext = React.createContext()

// useContext
export const useUser = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const user = {
    name: 'Son',
    age: 23
  }

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}

export default AppContextProvider
