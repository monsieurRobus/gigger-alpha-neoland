import React from 'react'
import GiggerTitle from '../../components/molecules/GiggerTitle/GiggerTitle'
import styled from 'styled-components'

const DashboardPage = () => {
  return (
    <StyledDashboardSection>
        <h1>¡Bienvenidos a <em>Gigger</em>!</h1>
    </StyledDashboardSection>
  )
}

const StyledDashboardSection = styled.section`

    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

export default DashboardPage