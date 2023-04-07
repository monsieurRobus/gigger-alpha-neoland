import React from 'react'
import * as Styles from '../../../styles/Variables' 
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


    h1 {
        color: ${Styles.COLOR_PRIMARY};
        font-size: 3rem;
        margin:0;
    }

    h2 {
        color: ${Styles.COLOR_LIGHT};
        font-size: 1rem;
        margin:0;
    }


    @media (max-width: 600px) {
        h1  {

            }

        h2  {

            }
        }

`

export default GiggerTitle