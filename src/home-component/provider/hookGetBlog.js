import {useFetch} from '../../services/useFetch'
import {useContext} from 'react'
import {HomeContext} from "./HomeContext"
const HookGetBlog = ({params}) => {
    const[blogUrl,options] = params
    console.log(params)
    console.log("hookurl options: ",blogUrl,options)
    const {error, isPending, lists } = useFetch(blogUrl, options)
    const {setBlogLists} = useContext(HomeContext)
    setBlogLists(lists)
    return <div> {isPending && "coucou:) ça charge!"}</div>

}
 
export default HookGetBlog;