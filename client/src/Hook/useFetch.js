
import {useState,useEffect} from "react";
import axios from "axios";
const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    useEffect(() => {
        const fetchDate=async()=>{
            setLoading(true);
            try{
            const res =await axios.get(url);
            setData(res.data)
            }catch(err){
                setError(err);
            }
            setLoading(false);
        }
        fetchDate();
    }, [url]);
    const rFetch=async()=>{
        setLoading(true);
        try{
        const res =await axios.get(url);
        setData(res.data)
        }catch(err){
            setError(err);
        }
        setLoading(true);
    }
   return {data,error,loading,rFetch}

}
export default useFetch;