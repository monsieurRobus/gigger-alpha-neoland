import React, { createContext, useContext, useState, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { getSong, getSongs } from '../services/songs'


const SongsContext = createContext()

export const SongsContextProvider = ({children}) => {

    const [songs, setSongs] = useState(()=>(getSongs().then((res)=>res.data)))

    console.log(songs)
    const values = useMemo(()=>{return songs},[songs])

    return (
        <SongsContext.Provider value={values}>{children}</SongsContext.Provider>
    )
}

export const useSongs = () => {
    return useContext(SongsContext)
}

