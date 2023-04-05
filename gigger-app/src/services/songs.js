import axios from "axios";

export const getSongs= async () => {

    const url= "http://localhost:3000/songs"
    
    return await axios.get(url)

}

export const getSong = async (id) => {

    const url= `http://localhost:3000/songs/${id}`
    
    return await axios.get(url)

}