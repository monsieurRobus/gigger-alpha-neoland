import React, { createContext, useContext, useState, useMemo } from 'react'
import { Navigate } from 'react-router-dom'

const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(()=>{
        const value = window.localStorage.getItem('user')
        
        if(value) return value
        else return null
        
    })

    const login = (credentials) => {
        window.localStorage.setItem('user', credentials.username)
        setUser(credentials.username)
    }

    const logout = () => { 
        setUser(null)
        window.localStorage.removeItem('user')
        return <Navigate to="/"/>
    }

    const values = useMemo(
            () => ({
            user,
            login,
            logout
            }),
            [user]
      )
    

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(UserContext)
}