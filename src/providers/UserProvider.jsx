import React, { useState, createContext, useContext } from 'react'

const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext)

export default UserProvider