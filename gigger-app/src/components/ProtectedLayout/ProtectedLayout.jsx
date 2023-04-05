import React, {useState, useMemo} from 'react'
import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import { getSongs } from '../../services/songs'
import NavDashboard from '../NavDashboard/NavDashboard'

const ProtectedLayout = () => {

    const {user,logout} = useAuth()

    const [songs, setSongs] = useState(()=>(getSongs().then((res)=>res.data)))

    const values = useMemo(()=>{return songs},[songs])


    if(!user){
        return <Navigate to="/" />
    }

  return (
    <>
      <h1>Dashboard</h1>
        <NavDashboard />
        <Outlet context={[songs,setSongs]}/>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default ProtectedLayout