import React, { useState,  } from 'react'
import StyledButton from '../../../ui/StyledButton/StyledButton'
import placeholder from '/gigger-placeholder.png'
import './SongComponent.css'
import { StyledSongComponent, StyledTagsContainerDiv, StyledTag } from './SongComponent.element'
import { useNavigate } from 'react-router-dom'


const SongComponent = ({onFavClick,datafav,songData,isProfile=false}) => {
  const bandName = songData.band
  const songName = songData.name 
  const imgUrl = songData.img
  const navigate = useNavigate()

  const time = (duration) => {
    const minutes = Math.floor(duration/60)
    const seconds = duration-60*Math.floor(duration/60)
    return `${minutes}:${seconds<10 ? '0':''}${seconds}`
  }

  const navigateSong= (id) => {
    navigate(`/dashboard/song/${id}`)
  }

  
  return (
    <StyledSongComponent onClick={()=>navigateSong(songData.id)}>
      <header>
        <StyledTagsContainerDiv>
          {songData.tags.map(tag => <StyledTag key={tag} className={`${tag} tag`}>{tag}</StyledTag>)}
        </StyledTagsContainerDiv>
        <div>
          {!isProfile?<StyledButton id={songData.id} onClick={onFavClick} className='position' data-fav={datafav} like>{datafav?'💓':'🖤'}</StyledButton>:null}
        </div>
      </header>
      <img src={imgUrl || placeholder} />
      <footer>
        <div>
          <h3>{bandName}</h3>
          <h4>{songName}</h4>
        </div>        
        <div>
        <p>{time(songData.duration)}</p>
        </div>
        
      </footer>
    </StyledSongComponent>
  )
}

export default SongComponent