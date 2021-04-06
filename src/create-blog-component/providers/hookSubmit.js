import {useFetch} from "../../services/useFetch"
import { useHistory } from "react-router-dom";
export const HookSubmit = ({url,options})=>{
    
   const {error, isPending, lists } = useFetch(url, options)
   const history = useHistory()
   history.push('/')
    return <div> {isPending}</div>
}