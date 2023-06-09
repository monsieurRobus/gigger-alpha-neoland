import React from 'react'
import styled from 'styled-components'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { useForm } from 'react-hook-form'
import { StyledRegisterPage } from './RegisterPage.element'



const validateFormRegister = (values) => {

    const errors = {}

    if(!values.username){
        errors.username = "Username is required"
    }

    if(!values.name){
        errors.name = "Name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }

    if(!values.passwordConfirmation){
        errors.passwordConfirmation = "Password confirmation is required"
    }

    if(values.password !== values.passwordConfirmation){
        errors.passwordConfirmation = "Password confirmation is not the same as password"
    }
    
    return errors

}

const RegisterPage = () => {

  const {handleSubmit, register, errors} = useForm()

  return (
    <StyledRegisterPage>
      <RegisterForm registerForm={validateFormRegister}/>
    </StyledRegisterPage>
  )
}


  
export default RegisterPage