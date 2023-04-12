import React, { useEffect, useState } from 'react'
import './NavDashboard.css'
import { NavLink } from 'react-router-dom'
import StyledButton from '../../ui/StyledButton/StyledButton'
import { FaPowerOff, FaSun } from 'react-icons/fa'
import { useAuth } from '../../context/UserContextProvider'
import GiggerTitle from '../molecules/GiggerTitle/GiggerTitle'
import styled from 'styled-components'
import { getUser, getUserDataLocalStorage } from '../../services/users'
import ButtonMenu from '../../ui/ButtonMenu/ButtonMenu'

const NavDashboard = ({handlerButton}) => {
    const {user,logout} = useAuth()
 
    const [userAvatar, setUserAvatar] = useState(()=>(getUserDataLocalStorage().then(res => setUserAvatar(res.data[0].avatar)) || null))
    
    return (
        <Wrapper id={'nav-menu'}> 
            <NavLink onClick={handlerButton} to="/dashboard"><GiggerTitleNavBar/></NavLink>
            
            <NavElement>
                
                { userAvatar    ?   <img src={userAvatar} alt={user}/>   :   null  }
       
                <NavLink onClick={handlerButton} to="/dashboard/profile">Profile</NavLink>

            </NavElement>

            <NavLink onClick={handlerButton} to="/dashboard/setlist">Setlist</NavLink>
            <NavLink onClick={handlerButton} to="/dashboard/songs">Songlist</NavLink>
            <ButtonGroup>
                <StyledButton onClick={logout} logout><FaPowerOff /></StyledButton>
            </ButtonGroup>
            
        </Wrapper>
    )
}

const GiggerTitleNavBar = styled(GiggerTitle)`

    

`

const Wrapper = styled.nav`

z-index: 9999;
    position:fixed;
    width:100%;
    margin:0;
    padding:0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    align-content: center;
    font-size:1.5rem;
    transition: background-color 0.4s ease-in-out;
    background-color: var(--color-darkest);
    
    
    .active {
        color: var(--color-primary);
        text-shadow: 1px 1px 1px var(--color-primary);
    }

    @media (max-width: 768px) {
        z-index: 9999;
        position:fixed;
        display: flex;
        flex-direction: column;
        background-color: var(--color-dark);
        overflow-x: hidden;
        overflow-y: hidden;
        width:100%;
        height:100%;
        
      

    }



`



const NavElement = styled.div`

    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:1rem;

    img {
        width:64px;
        height:64px;
        border-radius:50%;
    }

    

`
const ButtonGroup = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:0.2rem;

`
export default NavDashboard