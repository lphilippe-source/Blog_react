import {useState, useContext, useEffect} from 'react'
import {UserContext} from "../services/UserContext"
import { HomeContext } from './provider/HomeContext'

const HomeLogic = ({children}) => {

    const title = "all blogs!"
    const url = 'https://localhost:8000/blog'
    const deleteUrl = "https://localhost:8000/blog/delete"

    let {token} = useContext(UserContext)
    const {blogLists} = useContext(HomeContext)

    const [returnTitle,returnHookGetBlog,returnHookDelete,returnList,returnDetail] = children
    const [content,setContent] = useState('')
    const [showContent,setShowContent] = useState(false)
    const [deleteButton,setDeleteButton] = useState(false)
    const [deleteBlogId,setDeleteBlogId] = useState('')
    const [isTokenOk,setIsTokenOk] = useState(false)
    const [promiseOptions,setPromiseOptions] = useState(false)


    const toggleContent=(customEvent)=>{
        setShowContent(!showContent)
        setContent(customEvent)
    }
   
    useEffect(()=>{
        const getToken = async()=>{
            return await token.token
            }
        const getOption = async(value)=>{
            return await {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer '+value
                }
            }
        }
        getToken()
        .then ((res)=>{
            return getOption(res)
        })
        .then((res)=>{
            res && setPromiseOptions(res)
            setIsTokenOk(true)
        })          
    },[token])
    
    const options={
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token.token
        },
        body: JSON.stringify(deleteBlogId)
    }

    const handleDelete=(blogId)=>{
        setDeleteButton(true)
        setDeleteBlogId(blogId)
    }

    function mapList(){
        return blogLists && JSON.parse(blogLists).map(
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
        {isTokenOk && returnHookGetBlog([url,promiseOptions])}
        {deleteButton ? returnHookDelete([deleteUrl,options]) : detailOrList()}
        </> 
    )
}
 
export default HomeLogic;