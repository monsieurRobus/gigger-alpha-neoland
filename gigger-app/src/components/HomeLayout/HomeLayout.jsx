import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'



const HomeLayout = () => {

    const {user} = useAuth()

    if(user) return <Navigate to="/dashboard" />    
    

    return (
            <>
                <Outlet />
            </>
    )
}

export default HomeLayout