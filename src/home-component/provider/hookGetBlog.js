import {useFetch} from '../../services/useFetch'
import {useContext, useEffect} from 'react'
import {HomeContext} from "./HomeContext"

const HookGetBlog = ({params}) => {

    const[blogUrl,options] = params
    const {error, isPending, lists } = useFetch(blogUrl, options)
    const {setBlogLists} = useContext(HomeContext)
    useEffect(()=>{
        setBlogLists(lists)
    })

    return <div> {isPending && "coucou:) ça charge!"}</div>
}
 
export default HookGetBlog;