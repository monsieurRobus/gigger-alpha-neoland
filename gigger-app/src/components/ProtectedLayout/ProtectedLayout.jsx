import React, {useState, useMemo} from 'react'
import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import useRequest from '../../hooks/useRequest'
import { songsUrl, setlistsUrl, usersUrl } from '../../services/songs'
import NavDashboard from '../NavDashboard/NavDashboard'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'


const ProtectedLayout = () => {


    const showMenu = () => {

      const menu = document.querySelector('#nav-menu')
      menu.classList.toggle('active')    

    }

    const {user} = useAuth()

    const songs = useRequest(songsUrl)
    const setlists = useRequest(setlistsUrl)
    const userData = useRequest(`http://localhost:3000/users?username=${user}`)

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
    
      <ButtonMenu handleClick={showMenu}/>
      <NavDashboard user={userData}/>
      <Outlet context={values}/>    
    </>
  )
}

export default ProtectedLayout