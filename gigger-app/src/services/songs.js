import axios from "axios";

export const songsUrl = 'http://localhost:3000/songs'
export const setlistsUrl = 'http://localhost:3000/setlists'
export const usersUrl = 'http://localhost:3000/users'
export const getSongs= async () => {

    const url= "http://localhost:3000/songs"
    
    return await axios.get(url)

}

export const getSong = async (id) => {

    const url= `http://localhost:3000/songs/${id}`
    
    return await axios.get(url)

}