import { useEffect,useState } from 'react'

export const useFetch = (url,options) => {
    const[error, setError] = useState(null)
    const [isPending,setPending] = useState(true)
    const[lists,setLists] = useState(null)
    
    useEffect(()=>{
        fetch(url,options)
        .then(res=>{
            console.log(res)
            if(!res.ok){
                throw Error("impossible d'atteindre le serveur")
            }
                return res.json()
        })
        .then((data)=>{
            console.log('data: ',data)
                setLists(data)
                setPending(false)
                setError(null)
        })
        .catch(error=>{
            setError(error.message)
            setPending(false)
        })
        return console.log('cleanup')
    },[url,options])

    return {error, isPending, lists }

}