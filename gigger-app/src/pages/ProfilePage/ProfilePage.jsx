import React from 'react'
import { useOutletContext } from 'react-router-dom'


const ProfilePage = () => {

  const {songs,userData} = useOutletContext()

  return (
    <section>
      <h1>{userData.name}</h1>
      <h2>{userData.email}</h2>
      <h3>Favourite songs:</h3>
      <ul>
        {songs.filter(song => userData.favourites.includes(song.id)).map(song => (<li key={song.id}>{song.band} - {song.name}</li>))}
      
      </ul>
    </section>
  )
}

export default ProfilePage