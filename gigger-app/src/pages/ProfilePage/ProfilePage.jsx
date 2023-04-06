import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getUserDataLocalStorage } from '../../services/users'


const ProfilePage = () => {

  const {songs,userData} = useOutletContext()
  const [user,setUser] = useState(userData ||null)
  useEffect(() => {
    getUserDataLocalStorage().then(res => setUser(res.data[0]))

}, []);

  if(!user) return (<h1>Loading...</h1>)

  return (
    <section>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>Favourite songs:</h3>
      <ul>
        {songs.filter(song => user.favourites.includes(song.id)).map(song => (<li key={song.id}>{song.band} - {song.name}</li>))}
      
      </ul>
    </section>
  )
}

export default ProfilePage