
import styled from 'styled-components'

export const StyledSection = styled.section`


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


    @media (max-width: 768px) {
        padding:0;
        width: inherit;
        height: inherit;
        border-radius: 0;
        box-shadow: none;
    
    }
`
export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25vw;
    gap: 2rem;

    @media (max-width: 768px) {
        width: 80vw;
    }

`

export const StyledFormFields = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: start;


`

export const StyledLabelForm = styled.label`

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;

    @media (max-width: 768px) {
        width:100%;
        flex-direction: column;      
        
    }



`

export const StyledLabelSpan = styled.span`

    width: 30%;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-light);


` 

export const StyledLogo = styled.img`
    width:150px;
    @media (min-width: 600px) {
        display:none;
    }
`
export const FormButtonDashboard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    width:100%;

`

export const FormButton = styled.button`

    width:100%;
    border-radius: 0.4rem;
    padding:0.4rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    color: ${props => props.login ? 'var(--color-darkest)' : props.register ? 'var(--color-darkest)':'var(--color-medium)'};
    background-color: ${props => props.login ? 'var(--color-primary)' : props.register ? 'var(--color-light)':'var(--color-medium)'};
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: var(--color-secondary);
    }

    

`

export const FormInputField = styled.input`
    width: 70%;
    box-sizing: border-box;
    padding:0.8rem;
    width: inherit;

    .error{
        border: 3px 2px coral !important;
    }
`

export const FormSeparator = styled.span`

    text-align: center;

`

export const FormErrorsDiv = styled.div`

    p{color: var(--color-error);}
    

`

export const FormDivisionDiv = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

`