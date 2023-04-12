import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import {StyledMain, StyledHeader,StyleSetlistSongsDiv} from './SetlistDetailPage.element'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'
import SongComponent from '../../components/molecules/SongComponent/SongComponent'


const SetlistDetailPage = () => {
    const {songs, setlists} = useOutletContext()
    const {id} = useParams()

  return (
    <>
        <StyledMain>
            <ButtonMenu goBack/>
            <StyledHeader>
                <h1>Setlist</h1>
                <div>
                    <h1>{setlists.filter(setlist=>setlist.id ==id)[0]?.name}</h1>
                    <h2>{setlists.filter(setlist=>setlist.id ==id)[0]?.location}</h2>
                </div>
                
            </StyledHeader>
           
        </StyledMain>
        <StyleSetlistSongsDiv>
                {setlists.filter(setlist=>setlist.id ==id)[0]?.selection.map((song,index) => (
                    song && <SongComponent isProfile={true} key={index} songData={songs.find(song2 => song2.id === song)} />
                ))}
            </StyleSetlistSongsDiv>
    </>
  )
}

export default SetlistDetailPage