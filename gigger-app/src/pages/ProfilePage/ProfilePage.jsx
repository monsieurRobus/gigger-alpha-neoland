import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import SongComponent from '../../components/molecules/SongComponent/SongComponent'
import styled from 'styled-components'
const ProfilePage = () => {

  const {songs,userData} = useOutletContext()
  const user = userData[0]

  if(!user) return (<h1>Loading...</h1>)

  return (
    <StyledProfilePage>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>Favourite songs:</h3>
      <StyledFavouritesDiv>
        {songs.filter(song => user.favourites.includes(song.id)).map(song => (<SongComponent key={song.id} songData={song} isProfile={true} datafav={user.favourites.includes(song.id)}/>))}
      </StyledFavouritesDiv>
    </StyledProfilePage>
  )
}

const StyledProfilePage = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`

const StyledFavouritesDiv = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;

`


export default ProfilePage