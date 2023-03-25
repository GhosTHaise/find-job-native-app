import {useState,useEffect} from "react"
import axios from "axios"
//import {RAPID_API_KEY} from "@env";

//const rapidAPiKey = RAPID_API_KEY;

const useFetch = (instance,endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': "b10adcce97msh9638a9ae812c8aep106842jsn5c5e7b510b95",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await instance.request(options)
            setData(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error") 
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    },[])

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }
    return {data,isLoading,error,refetch}
};

export default useFetch