import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledDashboardSection, StyledDashboardDiv, StyledDashboardElementDiv } from './DashboardPage.element'


const DashboardPage = () => {

  
  const {songs,setlists,userData} = useOutletContext()
  const user = userData[0]

  
  return (
    <StyledDashboardSection>
        <h1>¡Bienvenido a <em>Gigger</em>, {user && user.name}! 😊</h1>
        <StyledDashboardDiv>
          <StyledDashboardElementDiv>
            <h2>Perfil:</h2>
            <span></span>
          </StyledDashboardElementDiv>
          <StyledDashboardElementDiv>
            <h2>Setlist creados:</h2>
            <span>{setlists.length}</span>
          </StyledDashboardElementDiv>
          <StyledDashboardElementDiv>
            <h2>Canciones:</h2>
            <span>{songs.length}</span>
          </StyledDashboardElementDiv>
        </StyledDashboardDiv>
    </StyledDashboardSection>
  )
}



export default DashboardPage