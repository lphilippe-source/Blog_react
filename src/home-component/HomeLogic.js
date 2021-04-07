import {useFetch} from '../services/useFetch'
import {useState,useEffect} from 'react'
const HomeLogic = ({children}) => {

    const title = "all blogs!"
    const url = 'https://localhost:8000/blog'

    const[returnTitle,returnList,returnDetail]=children
    const[content,setContent] = useState('')
    const[showContent,setShowContent] = useState(false)
    const {error, isPending, lists } = useFetch(url, null)

    const toggleContent=(customEvent)=>{
        setShowContent(!showContent)
        setContent(customEvent)
    }

    return (
        <>
        {returnTitle(title)}

        {showContent ? returnDetail(content) :
        lists && lists.map((list)=>{return returnList(list,toggleContent)})}
        </> 
    )
}
 
export default HomeLogic;