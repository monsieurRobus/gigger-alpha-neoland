import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import SongComponent from '../../components/molecules/SongComponent/SongComponent'
import { StyledProfilePage, StyledProfileRow, StyledProfileImage, StyledFavouritesDiv, StyledFavouritesListDiv } from './ProfilePage.element'



const ProfilePage = () => {


  const {songs,userData} = useOutletContext()
  const user = userData[0]

  if(!user) return (<h1>Loading...</h1>)

  return (
    <StyledProfilePage>
      
      <StyledProfileRow>
        
        <div>
          <StyledProfileImage src={user.avatar} /></div>
        <div>
          <h1>Username: {user.name}</h1>
          <h2>Email: {user.email}</h2>
        </div>
      </StyledProfileRow>
      
      
      <StyledFavouritesDiv>
        <div>
          <h3>Favourite songs:</h3>
        </div>
        <StyledFavouritesListDiv>
          {songs.filter(song => user.favourites.includes(song.id)).map(song => (<SongComponent key={song.id} songData={song} isProfile={true} datafav={user.favourites.includes(song.id)}/>))}  
        </StyledFavouritesListDiv>        
      </StyledFavouritesDiv>
    </StyledProfilePage>
  )
}




export default ProfilePage