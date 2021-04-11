import {useFetch} from '../services/useFetch'
import {useState} from 'react'
const HomeLogic = ({children}) => {

    const title = "all blogs!"
    const url = 'https://localhost:8000/blog'

    const[returnTitle,returnHookDelete,returnList,returnDetail]=children
    const[content,setContent] = useState('')
    const[showContent,setShowContent] = useState(false)
    const[deleteButton,setDeleteButton] = useState(false)
    const {error, isPending, lists } = useFetch(url, null)
    const [deleteBlogId,setDeleteBlogId]= useState('')

    const toggleContent=(customEvent)=>{
        setShowContent(!showContent)
        setContent(customEvent)
    }

    const options={
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteBlogId)
    }
    const deleteUrl = "https://localhost:8000/blog/delete"
    const handleDelete=(blogId)=>{
        setDeleteButton(true)
        setDeleteBlogId(blogId)
    }

    function fetchParams(){
        return [deleteUrl,options]
    }

    function mapList(){
        return lists && lists.map(
            (list)=>{
                const temp = {...list}
                temp.author = list.author.firstName
                return returnList(temp,toggleContent,handleDelete)}
        )
    }

    function detailOrList(){
        return showContent ? returnDetail(content,toggleContent) : mapList()
    }

    return (
        <>
        {returnTitle(title)}
        {deleteButton ? returnHookDelete(fetchParams()) : detailOrList()}
        </> 
    )
}
 
export default HomeLogic;