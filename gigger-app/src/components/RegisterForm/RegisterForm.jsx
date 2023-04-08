import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth, UserContextProvider } from '../../context/UserContextProvider'
import { getUsers } from '../../services/users'
import gigger from '../../../public/gigger-placeholder.png'
import GiggerTitle from '../molecules/GiggerTitle/GiggerTitle'
import { StyledSection, StyledForm, StyledFormFields, StyledLabelForm, StyledLogo,FormButtonDashboard,FormButton, FormInputField,StyledLabelSpan, FormSeparator } from '../../config/StylingForm'

const RegisterForm = ({registerForm}) => {
    
    const {handleSubmit, register, errors} = useForm()
    const {login} = useAuth()
    const navigate = useNavigate()

    const navigateLogin = () => {

        navigate("/")
        

    }
    
    // const onFormSubmit = (values) => {
        
    //     getUsers().then(res => {
    //         res.data.forEach(user => {
    //             if(user.username === values.username && user.password === values.password){
    //                 login(values)
    //                 navigate("/dashboard")
    //                             }                
    //                         }
    //                     )
    //                 }
    //             )
    //         }

    return (
        <StyledSection>
            <GiggerTitle />
            <StyledLogo src={gigger}/>
            <StyledForm onSubmit={handleSubmit(registerForm)}>
                
                <StyledFormFields>
                    <StyledLabelForm>
                    <StyledLabelSpan>Username:</StyledLabelSpan>
                    <FormInputField {...register("username")} placeholder="Usuario" type="text" />
                    </StyledLabelForm>

                    <StyledLabelForm>
                    <StyledLabelSpan>Name:</StyledLabelSpan>
                    <FormInputField {...register("name")} placeholder="John Doe" type="text" />
                    </StyledLabelForm>
                    <StyledLabelForm>
                        <StyledLabelSpan>E-mail:</StyledLabelSpan>
                        <FormInputField {...register("email")} placeholder="fake@mail.com" type="email" />
                    </StyledLabelForm>

                    <StyledLabelForm>
                        <StyledLabelSpan>Password:</StyledLabelSpan>
                        <FormInputField {...register("password")} placeholder="******" type="password" />
                    </StyledLabelForm>

                    <StyledLabelForm>
                        <StyledLabelSpan>Password:</StyledLabelSpan>
                        <FormInputField {...register("password-confirmation")} placeholder="******" type="password" />
                    </StyledLabelForm>

                </StyledFormFields>
                
                <FormButtonDashboard>
                    <FormButton onClick={registerForm} register>Register</FormButton>
                    <FormSeparator>-or-</FormSeparator>
                    <FormButton onClick={navigateLogin} login>Login</FormButton>
                    
                </FormButtonDashboard>                
            </StyledForm>
        </StyledSection>
    )
}



export default RegisterForm