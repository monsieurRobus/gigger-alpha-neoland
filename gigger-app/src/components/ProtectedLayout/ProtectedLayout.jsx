import React, {useState, useMemo} from 'react'
import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import useRequest from '../../hooks/useRequest'
import { songsUrl, setlistsUrl, usersUrl } from '../../services/songs'
import NavDashboard from '../NavDashboard/NavDashboard'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'
import FooterComponent from '../FooterComponent/FooterComponent'

const ProtectedLayout = () => {


    const showMenu = () => {

      const menu = document.querySelector('#nav-menu')
      menu.classList.toggle('active')    

    }

    const closeMenu =() => {

      const menu = document.querySelector('#nav-menu')
      const buttonMenu = document.querySelector('#button-menu')
      menu.classList.remove('active')  
      buttonMenu.classList.remove('opened')  

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
    
      <ButtonMenu handleClick={showMenu} menu/>
      <NavDashboard handlerButton={closeMenu} user={userData}/>
      <Outlet context={values}/>    
      <FooterComponent/>
    </>
  )
}

export default ProtectedLayout