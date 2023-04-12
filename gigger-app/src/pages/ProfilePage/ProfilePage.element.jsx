import styled from "styled-components";

export const StyledProfilePage = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:10rem;
  padding-bottom: 10rem;

  @media (max-width: 768px) {

    padding-top:1rem;


  }

`

export const StyledFavouritesDiv = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

`

export const StyledFavouritesListDiv = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
  
  align-items: center;
  justify-content: center;

`

export const StyledProfileRow = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-darkest);
  padding: 1rem;
  border-radius: 20px;

  @media (max-width: 768px) {

    flex-direction: column;
    flex-wrap: nowrap;

  }

`

export const StyledProfileImage = styled.img`

  max-width: 300px;
  border-radius: 50%;
  box-shadow: 4px 4px 10px black;

`