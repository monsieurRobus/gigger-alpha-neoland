import axios from "axios";

export const getUsers = async () => {

    const url= "http://localhost:3000/users"
    
    return await axios.get(url)

}

export const getUser = async (username) => {

    const url= `http://localhost:3000/users?username=${username}`
    
    return await axios.get(url)

}

export const patchUsers = async (user,data) => {

    const url= `http://localhost:3000/users/${user}`
    
    return await axios.patch(url,data)

}

export const getUserDataLocalStorage = () => {
    const value = window.localStorage.getItem('user')  
    return getUser(`${value}`)
  }
  