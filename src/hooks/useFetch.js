import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = () => {
        setLoading(true)
        axios.get(url)
        .then(response => {
            setData(response.data) 
            if(response){setLoading(false)}
        })
        .catch(e => {
            console.error(e) 
            setError(e.message)
            setLoading(false)
        })
        
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return {data,loading,error};
}

export default useFetch;