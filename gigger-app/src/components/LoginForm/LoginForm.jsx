import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/UserContextProvider'
import { getUsers } from '../../services/users'
import gigger from '../../../public/gigger-placeholder.png'
import GiggerTitle from '../molecules/GiggerTitle/GiggerTitle'
import { StyledSection, StyledForm, StyledFormFields, StyledLabelForm, StyledLogo,FormButtonDashboard,FormButton, FormInputField, StyledLabelSpan, FormErrorsDiv } from '../../ui/StylingForm'



const LoginForm = () => {
    const {handleSubmit, register, errors} = useForm()
    const {login} = useAuth()
    const navigate = useNavigate()

    const onFormSubmit = (values) => {
        
        const errors = {}
        const errorsElement = document.getElementById("errors")
        const inputElements = document.getElementsByTagName("input")
        getUsers().then(res => {
            res.data.forEach(user => {
                if(user.username === values.username && user.password === values.password){
                    login(values)
                    navigate("/dashboard")
                }
                else {
                    errors.username = "Usuario o contraseña incorrectos"
                    errorsElement.innerHTML = ""

                    for(const error in errors){
                        errorsElement.innerHTML +=` <p>${errors[error]}</p>`                        
                        for(const input of inputElements){                        
                            input.classList.add('error')
                        }
                    }
                    
                    console.log(errors)
                }
                            }
                        )
                    }
                )
            }

    const navigateRegister = () => {

        navigate("/register")
        

    }

    return (
        <StyledSection>
            <GiggerTitle />
            <StyledLogo src={gigger}/>
            <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
                
                <StyledFormFields>
                    <StyledLabelForm>
                    <StyledLabelSpan>Username:</StyledLabelSpan>
                    <FormInputField {...register("username")} placeholder="Usuario" type="text" />
                    </StyledLabelForm>

                    <StyledLabelForm>
                        <StyledLabelSpan>Password:</StyledLabelSpan>
                        <FormInputField {...register("password")} placeholder="******" type="password" />
                    </StyledLabelForm>
                </StyledFormFields>
                
                <FormButtonDashboard>
                    <FormButton type="submit" login>Login</FormButton>
                    <FormButton onClick={navigateRegister} register>Register</FormButton>
                </FormButtonDashboard>    
                <FormErrorsDiv id="errors"></FormErrorsDiv>            
            </StyledForm>
        </StyledSection>
    )
}





export default LoginForm