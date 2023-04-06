import React, {useState, useMemo} from 'react'
import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import useRequest from '../../hooks/useRequest'
import { songsUrl, setlistsUrl, usersUrl } from '../../services/songs'
import NavDashboard from '../NavDashboard/NavDashboard'

const ProtectedLayout = () => {

    const {user,logout} = useAuth()

    

    const songs = useRequest(songsUrl)
    const setlists = useRequest(setlistsUrl)
    const userData = useRequest(`${usersUrl}?username=${user}`)[0]

    console.log(userData)

    const values = useMemo(()=> (
      {
        songs,setlists,userData
      }
      ),[songs,setlists,userData])


    if(!user){
        return <Navigate to="/" />
    }

  return (
    <>
      <h1>Dashboard</h1>
        <NavDashboard />
        <Outlet context={values}/>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default ProtectedLayout