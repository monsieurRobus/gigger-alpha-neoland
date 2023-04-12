import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import SetlistComponent from '../../components/molecules/SetlistComponent/SetlistComponent'
import styled from 'styled-components'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'

const SetlistPage = () => {

  const {songs,setlists} = useOutletContext()

  

  return (
    <StyledSetlisPage >
    
    <ButtonMenu addSetlistMenu/>
    {setlists.map(setlist => (

      <SetlistComponent key={setlist.id} setlist={setlist} songs={songs}/>

    ))}

    </StyledSetlisPage>
  )
}

const StyledSetlisPage = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  height: 85vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    
  padding: 1rem 0;
  }
`


export default SetlistPage