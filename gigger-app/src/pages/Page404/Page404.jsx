import React from 'react'
import { useNavigate } from 'react-router-dom'
import { giveMeARandomPhrase } from '../../utils/randomPhraseGenerator'
import styled from 'styled-components'

const Page404 = () => {

  const navigate = useNavigate()

  const handleClick = () => {
      
      navigate(-1)
      
  }
  const phraseToDraw = giveMeARandomPhrase()

  return (
    <Styled404Page>
        <Styled404Header>
          <h1>404</h1>
          <img src="https://media.tenor.com/fmC_LhZBAWoAAAAC/rajoy-hi.gif" alt="Rajoy saludando" />
        </Styled404Header>
        
        <h3>{phraseToDraw.phrase}</h3>
        <h4>{phraseToDraw.author}</h4>
        <button onClick={handleClick}>Back!</button>
    </Styled404Page>
  )
}

const Styled404Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;

`
const Styled404Header = styled.header`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h1{
    font-size: 10rem;
  }

  @media (max-width: 768px) {

    flex-direction: column;
    gap:0;
    margin:0; 
    padding:0;
    h1{
      font-size: 5rem;
    }

    

  }

`

export default Page404