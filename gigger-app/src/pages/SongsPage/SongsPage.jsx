import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import SongComponent from '../../components/molecules/SongComponent/SongComponent';
import { useAuth } from '../../context/UserContextProvider';
import useRequest from '../../hooks/useRequest';
import { usersUrl } from '../../services/songs';
import { getUser, patchUsers, getUserDataLocalStorage } from '../../services/users';



const SongsPage = () => {
  const {songs,userData} = useOutletContext()

  const [user,setUser] = useState(()=>(
    userData || null ))
  
  const [songList,setSongList] = useState(songs)

  useEffect(() => {
        setSongList(songs)
    
  }, [songs]);

  useEffect(() => {
    getUserDataLocalStorage().then(res => setUser(res.data[0]))

}, []);

  const handleFav = (e) => {
    
    if(e.target.dataset.fav==="true"){  
      
      const index = userData.favourites.indexOf(parseInt(e.target.id))
      userData.favourites.splice(index,1)  
      e.target.dataset.fav="false"
      e.target.innerHTML="🖤"
  }
    else{
     
      userData.favourites.push(parseInt(e.target.id))

      e.target.dataset.fav=true
      e.target.innerHTML="💓"
    }
    console.log(e.target.dataset)
    setUser(userData)
    console.log(userData.favourites)
    patchUsers(userData.id,{favourites: userData.favourites})
    
  }

  if (!user) return <h1>Loading...</h1>

  return (
    
    <section>
      {/* <ul>
      {songList.map(song => (
        <li key={song.id}>{song.name}{
          
          user.favourites.includes(song.id) ? 
            <button id={song.id} onClick={handleFav} data-fav="true">💓</button> :         
            <button id={song.id} onClick={handleFav} data-fav="false">🖤</button>}
        </li>
      ))}

    </ul> */}


      {songList.map(song => (<SongComponent key={song.id} songData={song} onFavClick={handleFav} datafav={user.favourites.includes(song.id)}/>))}
      
    </section>
    
  )
}

export default SongsPage