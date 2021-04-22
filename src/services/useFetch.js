import { useEffect,useState } from 'react'

export const useFetch = (url,options) => {
    const[error,setError] = useState(null)
    const [isPending,setPending] = useState(true)
    const[lists,setLists] = useState(null)
    console.log(options)

    const getData = async () => {
        // const user = await Amplify.Auth.currentAuthenticatedUser();
        // const token = user.signInUserSession.idToken.jwtToken;
        // const apiurl = 'xxx';
      
        return await fetch(url, options)
                    .then(res=>{
                        if(!res.ok){
                            throw Error("impossible d'atteindre le serveur")
                        }
                            return res.json()
                    })
                    .then((data)=>{
                        setLists(data)
                        setPending(false)
                        setError(null)
                    })
                    .catch(error=>{
                        setError(error.message)
                        setPending(false)
                    })
      }

    useEffect(()=>{
        getData()
        
        return console.log('cleanup')
    },[])

    return {error, isPending, lists }

}