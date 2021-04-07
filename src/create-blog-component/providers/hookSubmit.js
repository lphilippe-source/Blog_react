import {useFetch} from "../../services/useFetch"
// import { useHistory } from "react-router-dom";
export const HookSubmit = ({fetchParams})=>{
    const [url,options]=fetchParams()
   const {error, isPending, lists } = useFetch(url, options)
//    const history = useHistory()
//    history.push('/')
console.log(lists,error)
    return <div> {isPending && "coucou:) ça charge!"}</div>
}