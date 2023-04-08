import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styled from 'styled-components'


const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  )
}

const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

`

export default LoginPage