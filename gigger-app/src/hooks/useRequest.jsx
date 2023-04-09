import axios from 'axios'
import { useEffect, useState } from 'react'



const useRequest = (url) => {
    const [data, setData] = useState([])
    const getData = async () => {
    
    try {
        const response = await axios.get(url)
        setData(response.data)
    }
    catch (error)
    {
        console.error(error)
    }
        

    }
    
    useEffect(() => {
        getData()
    }, [])
  
    return data
}

export default useRequest