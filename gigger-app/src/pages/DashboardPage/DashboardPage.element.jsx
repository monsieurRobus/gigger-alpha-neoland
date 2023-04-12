import styled from "styled-components";

export const StyledDashboardSection = styled.section`

    width: 100%;
    height: 85vh;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    h1{

        font-size: 3rem;
        text-align: center;

    }

    @media (max-width: 768px) {

        padding-top:1rem;
        padding-bottom:10rem;

    }

    
    `

export const StyledDashboardDiv = styled.div`

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  
  
  @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const StyledDashboardElementDiv = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  padding:1rem;
  width: 200px;
  height: 200px;
  background-color: var(--color-medium);

  h2 {
    text-align: center;
    font-size: 1.4rem;    
    text-shadow: 2px 2px 2px var(--color-dark)
  }

  span {
    font-size: 3rem;
    text-shadow: 2px 2px 2px var(--color-dark)
  }

  @media (max-width: 768px) {
        flex-direction: column;
        width: 100px;
        height: 100px;

        h2 {
    text-align: center;
    font-size: 1rem;    
    text-shadow: 2px 2px 2px var(--color-dark)
  }

  span {
    font-size: 2rem;
    text-shadow: 2px 2px 2px var(--color-dark)
  }
    }
`