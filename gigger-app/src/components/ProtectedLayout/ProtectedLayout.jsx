import React, {useState, useMemo} from 'react'
import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import useRequest from '../../hooks/useRequest'
import { songsUrl, setlistsUrl, usersUrl } from '../../services/songs'
import StyledButton from '../../ui/StyledButton/StyledButton'
import NavDashboard from '../NavDashboard/NavDashboard'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'

const ProtectedLayout = () => {

    const {user} = useAuth()

    

    const songs = useRequest(songsUrl)
    const setlists = useRequest(setlistsUrl)
    const userData = useRequest(`${usersUrl}?username=${user}`)[0]


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
        <NavDashboard user={userData}/>
        <Outlet context={values}/>
      
    </>
  )
}

export default ProtectedLayout