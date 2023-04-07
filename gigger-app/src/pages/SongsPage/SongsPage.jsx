import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import SongComponent from '../../components/molecules/SongComponent/SongComponent';
import { patchUsers, getUserDataLocalStorage } from '../../services/users';
import styled from 'styled-components';
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
    setUser(userData)
    patchUsers(userData.id,{favourites: userData.favourites})
    
  }

  if (!user) return <h1>Loading...</h1>

  return (
    
    <StyledSongPage>

      {songList.map(song => (<SongComponent key={song.id} songData={song} onFavClick={handleFav} datafav={user.favourites.includes(song.id)}/>))}     

    </StyledSongPage>
    
  )
}

const StyledSongPage = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;

`

export default SongsPage