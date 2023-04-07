import React from 'react'
import styled from 'styled-components'
import { COLOR_PRIMARY, COLOR_LIGHT } from '../../styles/Variables'

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({logout})=>logout && '#e1e1e1'};
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

    &:hover {
        background-color: ${COLOR_PRIMARY};
        border: 1px solid #000;
        color: ${COLOR_LIGHT};
    }
`

export default StyledButton