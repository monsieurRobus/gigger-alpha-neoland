import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { StyledSongDetailPage, SeparatorsDiv, StyledSection, StyledSeparators, StyledSongImg,StyledHeader,StyledDetailSongTags,StyledTag, StyledLyricsDiv } from './SongDetailPage.element'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'
import placeholder from '../../../public/gigger-placeholder.png'

const SongDetailPage = () => {

  const {songs} = useOutletContext()
  const {id} = useParams()
  const [lyrics,setLyrics] = useState('')

  useEffect(()=>{
    setLyrics(songs.filter(song=>song.id ==id)[0]?.lyrics)
  },[songs])

  return (
    <StyledSongDetailPage>
    <StyledHeader>
      <StyledSongImg src={songs.filter(song=>song.id ==id)[0]?.img || placeholder} />
        <div>
          <h1>{songs.filter(song=>song.id ==id)[0]?.name}</h1>
          <h2>{songs.filter(song=>song.id ==id)[0]?.band}</h2>
        </div>
        
        <StyledDetailSongTags>
          {songs.filter(song=>song.id ==id)[0]?.tags.map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
        </StyledDetailSongTags>
    </StyledHeader>
    <StyledSection>
      
      <SeparatorsDiv>
        <StyledSeparators/>
          <h3>Letra</h3>          
        <StyledSeparators/>
      </SeparatorsDiv>
      <StyledLyricsDiv>
        {lyrics && <p dangerouslySetInnerHTML={{__html:`${lyrics}`}} ></p>}
      </StyledLyricsDiv>
      <ButtonMenu goBack/>
    </StyledSection>
      

    
    </StyledSongDetailPage>
  )
}


export default SongDetailPage