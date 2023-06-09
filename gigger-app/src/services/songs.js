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

export const getImageHeader = async (id) => {

    
    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
        params: {q: id, per_page: '10', page: '1'},
        headers: {
        'X-RapidAPI-Key': 'dd97dbb365msh61832862a011858p1bfebfjsn9d7802efa966',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    return await axios.request(options)
  

}