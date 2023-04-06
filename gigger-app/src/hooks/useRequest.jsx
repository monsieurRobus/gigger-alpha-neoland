import axios from 'axios'
import { useEffect, useState } from 'react'



const useRequest = (url) => {
    const [data, setData] = useState([])
    const getData = async () => {

        const response = await axios.get(url)
        setData(response.data)

    }
    
    useEffect(() => {
        getData()
    }, [])
  
    return data
}

export default useRequest