import { useState,useEffect } from "react";

const useFetch=(link)=>{
    const [data, setdata] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchdata=()=>{
        setLoading(true);
        console.log(`Fetching data from ${link}`);
        fetch(link,{
            method:"GET",
            credentials: "same-origin"
        })
        .then(res=>res.json())
        .then(res=>{
            setdata(res)
            setLoading(false);
        })
        .catch((err)=>{
            setError(err)
            setLoading(false);

        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return [data, loading, error];
}
export {useFetch};