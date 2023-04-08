import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import StyledButton from '../../ui/StyledButton/StyledButton'
import { FaPowerOff, FaSun } from 'react-icons/fa'
import { useAuth } from '../../context/UserContextProvider'
import GiggerTitle from '../molecules/GiggerTitle/GiggerTitle'
import styled from 'styled-components'
import { getUser, getUserDataLocalStorage } from '../../services/users'

const NavDashboard = () => {
    const {user,logout} = useAuth()
 
    const [userAvatar, setUserAvatar] = useState(()=>(getUserDataLocalStorage().then(res => setUserAvatar(res.data[0].avatar)) || null))
    
    useEffect(() => {
        
        console.log(userAvatar)
    }, []);


    return (
        <Wrapper>
            <GiggerTitleNavBar/>

            <NavElement>
                
                { userAvatar    ?   <img src={userAvatar} alt={user}/>   :   null  }
       
                <NavLink to="/dashboard/profile">Profile</NavLink>

            </NavElement>

            <NavLink to="/dashboard/setlist">Setlist</NavLink>
            <NavLink to="/dashboard/songs">Songlist</NavLink>
            <ButtonGroup>
                <StyledButton onClick={logout} logout><FaPowerOff /></StyledButton>
            </ButtonGroup>
            
        </Wrapper>
    )
}

const GiggerTitleNavBar = styled(GiggerTitle)`

    @media (max-width: 768px) {
           
                display:none;
           
        }

`

const Wrapper = styled.nav`

    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    font-size:1.5rem;
    transition: all 0.4s ease-in-out;
    .active {
        color:var(--color-primary);
        text-shadow: 1px 1px 2px var(--color-light);
        
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