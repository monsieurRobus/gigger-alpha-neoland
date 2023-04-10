import styled from "styled-components";

export const StyledDashboardSection = styled.section`

    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{

        font-size: 3rem;
        text-align: center;

    }

    
    `

export const StyledDashboardDiv = styled.div`

  display: flex;
  padding:1rem;
  flex-direction: row;  
  gap: 1rem;
  justify-content: center;
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

`