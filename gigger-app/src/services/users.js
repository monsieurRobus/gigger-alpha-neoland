import axios from "axios";

export const getUsers = async () => {

    const url= "http://localhost:3000/users"
    
    return await axios.get(url)

}

