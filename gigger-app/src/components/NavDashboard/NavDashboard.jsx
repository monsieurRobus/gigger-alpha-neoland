import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import StyledButton from '../../ui/StyledButton/StyledButton'
import { FaPowerOff } from 'react-icons/fa'
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
            <GiggerTitle />

            <NavElement>
                
                { userAvatar    ?   <img src={userAvatar} alt={user}/>   :   null  }
       
                <Link to="/dashboard/profile">Profile</Link>

            </NavElement>

            <Link to="/dashboard/setlist">Setlist</Link>
            <Link to="/dashboard/songs">Songlist</Link>

            <StyledButton onClick={logout} logout><FaPowerOff /></StyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.nav`

    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;


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

export default NavDashboard