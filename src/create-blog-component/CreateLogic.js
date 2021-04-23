import {useState,useContext,useEffect,useRef} from 'react'
import {useFetch} from '../services/useFetch'
import {UserContext} from '../services/UserContext'

export const CreateLogic = ({children}) => {
    const[hookSubmit,returnCreate,returnOptionList] = children



    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('auteur')
    const[submited,setSubmited] = useState(false)
    const[isTokenReady,setIsTokenReady] = useState(false)



    const handleChangeTitle = (e)=>setTitle(e.target.value)
    const handleChangeBody = (e)=>setBody(e.target.value)
    const handleChangeAuthor = (e)=>setAuthor(e.target.value)

    const blog = {title,body,author}
    const {token} = useContext(UserContext)
    const options = {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token.token
        },
        body: JSON.stringify(blog)
    }
    console.log("options: ",options)

    const urlFetchUser = "https://localhost:8000/blog/user"
    console.log("url options: ",urlFetchUser,options)
    const {error, isPending, lists } = useFetch(urlFetchUser,options)
    const url = "https://localhost:8000/blog/submit"

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmited(true)
    }
    useEffect(()=>{
        setIsTokenReady(true)
        console.log(token)
    },[token])
    
    function returnUserList(){
        return lists && JSON.parse(lists).map((list)=>{
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
