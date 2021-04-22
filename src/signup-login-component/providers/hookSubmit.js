import { useContext } from "react"
import {useFetch} from "../../services/useFetch"
import {UserContext} from "../../services/UserContext"
import {useEffect} from "react"
// import { useHistory } from "react-router-dom";
export const HookSubmit = ({fetchParams})=>{
    console.log("fetchReRender:", true)
    const [url,options]=fetchParams()
    const {token,setToken} = useContext(UserContext)
    const {error, isPending, lists } = useFetch(url, options)
    
        setToken(lists)
    
//    const history = useHistory()
//    history.push('/')
// console.log(lists)
    
    console.log("token: ", token)
    return <div> {isPending && "coucou:) ça charge!"}</div>
}