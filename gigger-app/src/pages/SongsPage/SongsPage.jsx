import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';


const SongsPage = () => {
  const {songs,userData} = useOutletContext()


  const handleFav = (e) => {
    console.log(e)
    if(e.target.dataset.fav=="true"){
      e.target.dataset.fav="false"
      e.target.innerHTML="🖤"
  }
    else{
      e.target.dataset.fav="false"
      e.target.innerHTML="💓"
    }

  }

  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}>{song.name}{
          
          userData.favourites.includes(song.id) ? 
            <button id={song.id} onClick={handleFav} data-fav="true">💓</button> :         
            <button id={song.id} onClick={handleFav} data-fav="false">🖤</button>}
        </li>
      ))}

    </ul>
  )
}

export default SongsPage