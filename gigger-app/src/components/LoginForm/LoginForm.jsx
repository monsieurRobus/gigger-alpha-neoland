import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth, UserContextProvider } from '../../context/UserContextProvider'
import { getUsers } from '../../services/users'

const LoginForm = () => {
    const {handleSubmit, register, errors} = useForm()
    const {login} = useAuth()
    const navigate = useNavigate()
    const onFormSubmit = (values) => {
        
        getUsers().then(res => {
            res.data.forEach(user => {
                if(user.username === values.username && user.password === values.password){
                    login(values)
                    navigate("/dashboard")
                                }                
                            }
                        )
                    }
                )
            }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label>
            <span>Username:</span>
            <input {...register("username")} placeholder="Usuario" type="text" />
            </label>

            <label>
                <span>Password:</span>
                <input {...register("password")} placeholder="******" type="password" />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm