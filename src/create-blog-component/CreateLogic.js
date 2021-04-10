import {useState} from 'react'

export const CreateLogic = ({children}) => {
    const[hookSubmit,returnCreate] = children
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('mario')
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
    function logicData(){
        return [
            title,body,author,
            handleSubmit,
            handleChangeAuthor,
            handleChangeTitle,
            handleChangeBody,
        ]
    }
    function fetchParams(){
        return [url,options]
    }

    return (
        <>
        {submited ? hookSubmit(fetchParams) : returnCreate(logicData)}
        </>
    );
}
