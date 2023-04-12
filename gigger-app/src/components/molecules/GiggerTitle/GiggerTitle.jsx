import React from 'react'
import SubTitleHeader from '../../atoms/SubTitleHeader/SubTitleHeader'
import TitleHeader from '../../atoms/TitleHeader/TitleHeader'
import styled from 'styled-components'
const GiggerTitle = ({children}) => {
  return (
    <Wrapper>
        <TitleHeader>gigger</TitleHeader>
        <SubTitleHeader>enjoy the stage</SubTitleHeader>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: flex-end;
    align-content: normal;
    gap:0.5;
    padding: 1rem 0;


    h1 {
        color: var(--color-primary);
        font-size: 3rem;
        margin:0;
        padding:0;
    }

    h2 {
        color: var(--color-light);
        font-size: 1rem;
        margin:0;
        
        padding:0;
    }

`

export default GiggerTitle