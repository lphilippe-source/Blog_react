import {useState} from 'react'
import {useFetch} from '../services/useFetch'

export const CreateLogic = ({children}) => {
    const[hookSubmit,returnCreate,returnOptionList] = children

    const urlFetchUser = "https://localhost:8000/blog/user"
    const {error, isPending, lists } = useFetch(urlFetchUser,null)

    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('auteur')
    const[submited,setSubmited] = useState(false)

    const handleChangeTitle = (e)=>setTitle(e.target.value)
    const handleChangeBody = (e)=>setBody(e.target.value)
    const handleChangeAuthor = (e)=>setAuthor(e.target.value)

    const url = "https://localhost:8000/blog/submit"
    const blog = {title,body,author}
    const options = {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmited(true)
    }
    function returnUserList(){
        return lists && lists.map((list)=>{
            return returnOptionList(list)
        })
    }

    function logicData(){
        return [
            title,body,author,
            handleSubmit,
            handleChangeAuthor,
            handleChangeTitle,
            handleChangeBody
        ]
    }
    function fetchParams(){
        return [url,options]
    }

    function display(){
        return submited ? hookSubmit(fetchParams) : returnCreate(logicData,returnUserList())

    }
    return (
        <>
        {isPending ? <div>loading...</div> : display()}
        </>
    );
}
