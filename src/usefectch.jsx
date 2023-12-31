import { useState,useEffect } from "react";
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] =useState(true)
    useEffect(()=> {
        const  abortCont = new AbortController();
        setTimeout(()=>{

            fetch(url, {signal:abortCont.signal})
            .then( res =>{
                if (!res.ok){
                    throw Error("could not fetch data from the resource")
                }
                return res.json();
            })
            .then(data =>{
                // console.log(data)
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error =>{
                if (error.name == 'AbortError'){
                    console.log("fetch arboted")
                }
                else{
                       setIsPending(false);
              setError(error.message);  
                }
             
                
    
            })
        },1000);
        return()=> abortCont.abort();
    }, [url]);
    return {data,isPending, error}
}
export default useFetch;

